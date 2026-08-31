import './style.css';

const translations = {
  sk: {
    'meta.title': 'Designerio — Váš priestor, vaše rozhodnutia',
    'meta.description': 'Designerio premení fotografiu vašej izby na premyslený návrh interiéru.',
    'a11y.skip': 'Preskočiť na obsah',
    'a11y.home': 'Designerio — domov',
    'a11y.navigation': 'Hlavná navigácia',
    'a11y.language': 'Výber jazyka',
    'a11y.videoUnsupported': 'Váš prehliadač nepodporuje prehrávanie videa.',
    'nav.how': 'Ako to funguje',
    'nav.price': 'Cena',
    'nav.cta': 'Navrhnúť interiér',
    'nav.ctaMobile': 'Appka',
    'hero.sectionLabel': 'Premena interiéru',
    'hero.title': 'Váš interiér.<br><em>Vaše rozhodnutia.</em>',
    'hero.lead': 'Nahrajte fotografiu a premeňte neurčitú predstavu na priestor, v ktorom chcete zostať.',
    'hero.scroll': 'Posuňte sa nižšie',
    'hero.videoLabel': 'Premena prehnaného AI interiéru na čistý, harmonický návrh',
    'hero.before': 'Predtým',
    'hero.after': 'Potom',
    'hero.finale': 'Váš priestor, vaše rozhodnutie.',
    'demo.title': 'Chcete zmeniť farbu sedačky? <em>Žiadny problém.</em>',
    'demo.lead': 'Designerio vám pomôže upraviť váš interiér.',
    'demo.detail': 'Jednoducho, zrozumiteľne a bez zdĺhavého nastavovania.',
    'demo.videoLabel': 'Ukážka zmeny farby sedačky v aplikácii Designerio',
    'video.play': 'Prehrať',
    'video.replay': 'Prehrať znova',
    'video.pause': 'Pozastaviť',
    'video.demoSuffix': 'ukážku',
    'steps.eyebrow': 'Ako to funguje',
    'steps.title': 'Tri kroky.<br>Jedna lepšia izba.',
    'steps.oneTitle': 'Nahrajte fotografiu',
    'steps.oneText': 'Stačí jeden záber miestnosti. Designerio si všimne dispozíciu, svetlo aj to, čo má zostať.',
    'steps.moodCalm': 'pokojný',
    'steps.moodNatural': 'prírodný',
    'steps.moodTimeless': 'nadčasový',
    'steps.twoTitle': 'Povedzte, čo sa vám páči',
    'steps.twoText': 'Vyberte miestnosť, náladu a smer. Bez odborných výrazov a nekonečných formulárov.',
    'steps.done': 'Hotovo',
    'steps.threeTitle': 'Pozrite si nový priestor',
    'steps.threeText': 'Za chvíľu dostanete vizuálny návrh, s ktorým môžete ďalej pracovať, zdieľať ho alebo sa k nemu vrátiť.',
    quote: '„Dobrá miestnosť nezačína nábytkom.<br>Začína pocitom, ktorý v nej chcete mať.“',
    'pricing.eyebrow': 'Cena',
    'pricing.title': 'Žiadne prekvapenia.<br>Len dobrý návrh.',
    'pricing.text': 'Finálne balíky ešte pripravujeme. Keď ich zverejníme, vždy dopredu uvidíte, koľko návrh stojí — bez skrytých poplatkov.',
    'pricing.early': 'Skorý prístup',
    'pricing.status': 'Cenník pripravujeme',
    'pricing.itemOne': 'Návrh z vašej fotografie',
    'pricing.itemTwo': 'Výber nálady a typu miestnosti',
    'pricing.itemThree': 'Výsledok pripravený na zdieľanie',
    'pricing.cta': 'Otvoriť Designerio',
    'final.eyebrow': 'Vaša predstava môže dostať tvar',
    'final.title': 'Ako by mohla vyzerať<br><em>vaša izba?</em>',
    'final.cta': 'Začať navrhovať',
    'footer.tagline': 'Váš osobný dizajnér, len bez halucinácií',
    'footer.top': 'Späť hore ↑'
  },
  en: {
    'meta.title': 'Designerio — Your space, your decisions',
    'meta.description': 'Designerio turns a photo of your room into a thoughtful interior design concept.',
    'a11y.skip': 'Skip to content',
    'a11y.home': 'Designerio — home',
    'a11y.navigation': 'Main navigation',
    'a11y.language': 'Choose language',
    'a11y.videoUnsupported': 'Your browser does not support video playback.',
    'nav.how': 'How it works',
    'nav.price': 'Pricing',
    'nav.cta': 'Design your interior',
    'nav.ctaMobile': 'Open app',
    'hero.sectionLabel': 'Interior transformation',
    'hero.title': 'Your interior.<br><em>Your decisions.</em>',
    'hero.lead': 'Upload a photo and turn a vague idea into a space you will want to stay in.',
    'hero.scroll': 'Scroll to explore',
    'hero.videoLabel': 'Transformation of an overdone AI interior into a clean, harmonious design',
    'hero.before': 'Before',
    'hero.after': 'After',
    'hero.finale': 'Your space, your decision.',
    'demo.title': 'Want to change the sofa colour? <em>No problem.</em>',
    'demo.lead': 'Designerio helps you refine your interior.',
    'demo.detail': 'Simply, clearly and without tedious setup.',
    'demo.videoLabel': 'A sofa colour change in the Designerio app',
    'video.play': 'Play',
    'video.replay': 'Play again',
    'video.pause': 'Pause',
    'video.demoSuffix': 'demo',
    'steps.eyebrow': 'How it works',
    'steps.title': 'Three steps.<br>One better room.',
    'steps.oneTitle': 'Upload a photo',
    'steps.oneText': 'One photo of the room is enough. Designerio notices the layout, the light and everything that should stay.',
    'steps.moodCalm': 'calm',
    'steps.moodNatural': 'natural',
    'steps.moodTimeless': 'timeless',
    'steps.twoTitle': 'Tell us what you like',
    'steps.twoText': 'Choose the room, mood and direction. No jargon and no endless forms.',
    'steps.done': 'Done',
    'steps.threeTitle': 'See your new space',
    'steps.threeText': 'In a moment, you will receive a visual concept you can refine, share or return to later.',
    quote: '“A good room does not begin with furniture.<br>It begins with how you want to feel in it.”',
    'pricing.eyebrow': 'Pricing',
    'pricing.title': 'No surprises.<br>Just good design.',
    'pricing.text': 'We are still preparing the final packages. Once they launch, you will always see the price upfront — with no hidden fees.',
    'pricing.early': 'Early access',
    'pricing.status': 'Pricing coming soon',
    'pricing.itemOne': 'A design based on your photo',
    'pricing.itemTwo': 'Choice of mood and room type',
    'pricing.itemThree': 'A result ready to share',
    'pricing.cta': 'Open Designerio',
    'final.eyebrow': 'Your idea can take shape',
    'final.title': 'What could<br><em>your room look like?</em>',
    'final.cta': 'Start designing',
    'footer.tagline': 'Your personal designer, without the hallucinations',
    'footer.top': 'Back to top ↑'
  }
};

const supportedLanguages = Object.keys(translations);
const languageFromUrl = new URLSearchParams(window.location.search).get('lang');
let storedLanguage;

try {
  storedLanguage = localStorage.getItem('designerio-language');
} catch {
  storedLanguage = null;
}

let currentLanguage = supportedLanguages.includes(languageFromUrl)
  ? languageFromUrl
  : supportedLanguages.includes(storedLanguage)
    ? storedLanguage
    : navigator.language.toLowerCase().startsWith('sk') ? 'sk' : 'en';

const translate = key => translations[currentLanguage][key] ?? translations.sk[key] ?? key;

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

function applyLanguage(language, { updateUrl = true } = {}) {
  if (!supportedLanguages.includes(language)) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = translate('meta.title');
  document.querySelector('meta[name="description"]')?.setAttribute('content', translate('meta.description'));

  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = translate(element.dataset.i18n);
  });

  document.querySelectorAll('[data-i18n-html]').forEach(element => {
    element.innerHTML = translate(element.dataset.i18nHtml);
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    element.setAttribute('aria-label', translate(element.dataset.i18nAriaLabel));
  });

  document.querySelectorAll('[data-language]').forEach(button => {
    const isActive = button.dataset.language === language;
    button.setAttribute('aria-pressed', String(isActive));
  });

  try {
    localStorage.setItem('designerio-language', language);
  } catch {
    // The language still works when storage is unavailable.
  }

  if (updateUrl) {
    const url = new URL(window.location.href);
    if (language === 'sk') url.searchParams.delete('lang');
    else url.searchParams.set('lang', language);
    window.history.replaceState({}, '', url);
  }

  updateFeatureVideoControl();
}

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
  const videoPan = videoProgress * videoProgress * (3 - 2 * videoProgress);

  root.style.setProperty('--story-progress', progress.toFixed(3));
  root.style.setProperty('--hero-out', heroOut.toFixed(3));
  root.style.setProperty('--hero-y', `${(-heroOut * 3).toFixed(3)}rem`);
  root.style.setProperty('--room-in', roomIn.toFixed(3));
  root.style.setProperty('--room-scale', (.94 + roomIn * .06).toFixed(3));
  root.style.setProperty('--video-progress', videoProgress.toFixed(3));
  root.style.setProperty('--video-pan', `${(videoPan * 100).toFixed(2)}%`);
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
  const label = ended ? translate('video.replay') : paused ? translate('video.play') : translate('video.pause');

  featureVideoIcon.textContent = ended || paused ? '▶' : 'Ⅱ';
  featureVideoLabel.textContent = label;
  featureVideoControl.setAttribute('aria-label', `${label} ${translate('video.demoSuffix')}`);
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
document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});
applyLanguage(currentLanguage, { updateUrl: false });
selectVideoSource();
updateTransformation();
