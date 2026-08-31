import './style.css';

const transformation = document.querySelector('.transformation');
const root = document.documentElement;
const header = document.querySelector('[data-header]');
const progressBar = document.querySelector('[data-progress]');
const transformationVideo = document.querySelector('[data-transformation-video]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const mobileVideo = window.matchMedia('(max-width: 760px)');
const featureVideo = document.querySelector('[data-feature-video]');
const featureVideoControl = document.querySelector('[data-video-control]');
const featureVideoIcon = document.querySelector('[data-video-control-icon]');
const featureVideoLabel = document.querySelector('[data-video-control-label]');
let targetVideoTime = 0;

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const range = (progress, start, end) => clamp((progress - start) / (end - start));

function updateTransformation() {
  if (!transformation) return;
  const rect = transformation.getBoundingClientRect();
  const scrollable = transformation.offsetHeight - window.innerHeight;
  const progress = clamp(-rect.top / scrollable);
  const heroOut = range(progress, 0.05, 0.2);
  const roomIn = range(progress, 0.08, 0.24);
  const finaleIn = range(progress, 0.7, 0.9);
  const videoProgress = range(progress, 0.16, 0.72);

  root.style.setProperty('--story-progress', progress.toFixed(3));
  root.style.setProperty('--hero-out', heroOut.toFixed(3));
  root.style.setProperty('--hero-y', `${(-heroOut * 3).toFixed(3)}rem`);
  root.style.setProperty('--room-in', roomIn.toFixed(3));
  root.style.setProperty('--room-scale', (.94 + roomIn * .06).toFixed(3));
  root.style.setProperty('--video-progress', videoProgress.toFixed(3));
  root.style.setProperty('--before-label', (1 - range(videoProgress, .08, .28)).toFixed(3));
  root.style.setProperty('--after-label', range(videoProgress, .72, .92).toFixed(3));
  root.style.setProperty('--finale-in', finaleIn.toFixed(3));
  root.style.setProperty('--finale-y', `${((1 - finaleIn) * 2).toFixed(3)}rem`);
  progressBar.style.transform = `scaleX(${progress})`;
  header.classList.toggle('is-compact', progress > 0.08);

  if (transformationVideo?.duration) {
    targetVideoTime = reduceMotion.matches
      ? transformationVideo.duration
      : videoProgress * transformationVideo.duration;

    if (Math.abs(transformationVideo.currentTime - targetVideoTime) > 1 / 30) {
      transformationVideo.currentTime = targetVideoTime;
    }
  }
}

let ticking = false;
function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateTransformation();
      ticking = false;
    });
    ticking = true;
  }
}

function selectVideoSource() {
  if (!transformationVideo) return;

  const mode = mobileVideo.matches ? 'mobile' : 'desktop';
  const source = transformationVideo.dataset[`${mode}Src`];
  const poster = transformationVideo.dataset[`${mode}Poster`];

  if (transformationVideo.dataset.activeSource === source) return;

  transformationVideo.pause();
  transformationVideo.poster = poster;
  transformationVideo.src = source;
  transformationVideo.dataset.activeSource = source;
  transformationVideo.load();
}

function updateFeatureVideoControl() {
  if (!featureVideo || !featureVideoControl) return;

  const ended = featureVideo.ended || featureVideo.currentTime >= featureVideo.duration - 0.1;
  const paused = featureVideo.paused;
  const label = ended ? 'Prehrať znova' : paused ? 'Prehrať' : 'Pozastaviť';

  featureVideoIcon.textContent = ended || paused ? '▶' : 'Ⅱ';
  featureVideoLabel.textContent = label;
  featureVideoControl.setAttribute('aria-label', `${label} ukážku`);
}

const playbackObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (!featureVideo) return;

    if (entry.isIntersecting && !reduceMotion.matches && !featureVideo.dataset.played) {
      featureVideo.dataset.played = 'true';
      featureVideo.play().catch(() => updateFeatureVideoControl());
    } else if (!entry.isIntersecting && !featureVideo.paused) {
      featureVideo.pause();
    }
  }),
  { threshold: 0.55 }
);

if (featureVideo) playbackObserver.observe(featureVideo);

featureVideoControl?.addEventListener('click', () => {
  if (!featureVideo) return;

  if (featureVideo.ended || featureVideo.currentTime >= featureVideo.duration - 0.1) {
    featureVideo.currentTime = 0;
    featureVideo.play();
  } else if (featureVideo.paused) {
    featureVideo.play();
  } else {
    featureVideo.pause();
  }
});

featureVideo?.addEventListener('play', updateFeatureVideoControl);
featureVideo?.addEventListener('pause', updateFeatureVideoControl);
featureVideo?.addEventListener('ended', updateFeatureVideoControl);

const observer = new IntersectionObserver(
  entries => entries.forEach(entry => entry.target.classList.toggle('is-visible', entry.isIntersecting)),
  { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
);

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', updateTransformation);
reduceMotion.addEventListener?.('change', updateTransformation);
mobileVideo.addEventListener?.('change', selectVideoSource);
transformationVideo?.addEventListener('loadedmetadata', () => {
  transformationVideo.pause();
  updateTransformation();
});
selectVideoSource();
updateFeatureVideoControl();
updateTransformation();
