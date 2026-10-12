/* =========================================================
   Content — edit this block to update the site.
   ========================================================= */
const PROFILE = {
  github: 'https://github.com/jiaazhaoo',
  linkedin: 'https://www.linkedin.com/in/jiazhao-career/',
  email: 'zhaojia_pri@outlook.com',
};

// Cards by section. A product can sit in more than one section, with the
// description written for that section. Nothing here claims users for the
// side projects: shipped means live and complete, not adopted.
const PROJECTS = [
  // ---------- AI ----------
  {
    section: 'ai',
    name: 'ReinsLite',
    tagline: 'Reins for AI pipelines that coding agents build and run.',
    status: 'Open source',
    ribbon: 'Every run traceable',
    desc: 'When coding agents write and run pipelines all day, it removes the room for accidents: changes merge only through a frozen benchmark, every paid call is reserved against a budget first, and every run records who, what, which cases and at what cost.',
    tags: ['Coding agents', 'Evals', 'Cost control'],
    image: 'assets/projects/reinslite.jpg',
    gradient: 'linear-gradient(135deg,#ede9fe,#c4b5fd 55%,#7c3aed)',
    repo: 'https://github.com/jiaazhaoo/ReinsLite',
  },
  {
    section: 'ai',
    name: 'Briffy',
    tagline: 'Multimodal input, turned into text on the machine.',
    status: 'Live',
    ribbon: 'On-device',
    desc: 'Turns screenshots, files and voice notes into text on your own computer, so recognition never leaves it, then serves what it holds to other AI tools over MCP.',
    tags: ['OCR', 'Speech-to-text', 'MCP'],
    image: 'assets/projects/briffy.jpg',
    gradient: 'linear-gradient(135deg,#dbeafe,#93c5fd 55%,#3b82f6)',
    live: 'https://briffy.cc',
    repo: 'https://github.com/jiaazhaoo/briffy',
  },
  {
    section: 'ai',
    name: 'FreshAir',
    tagline: 'A second opinion that hasn’t read the argument.',
    status: 'Open source',
    ribbon: 'Clean context',
    desc: 'Asks a model from another vendor to look at the work fresh: it sees what you asked for and what changed, never the reasoning that got there.',
    tags: ['Coding agents', 'Context', 'Multi-model'],
    visual: 'freshair',
    gradient: 'linear-gradient(135deg,#dcfce7,#86efac 55%,#16a34a)',
    repo: 'https://github.com/jiaazhaoo/freshair',
  },

  // ---------- Geospatial ----------
  {
    section: 'geospatial',
    name: 'Georeferencing bad plans',
    tagline: 'Faded prints, faxes and sketches, placed automatically.',
    status: 'In production',
    ribbon: 'No hand-picked points',
    desc: 'Reads road names, house numbers and the north arrow on a scanned plan to place it roughly, then matches it against Ordnance Survey line work to land it on the British National Grid.',
    tags: ['OCR', 'Vision model', 'Image matching'],
    image: 'assets/projects/geo-plans.jpg',
    visual: 'plan',
    gradient: 'linear-gradient(135deg,#fae8ff,#e9a8de 55%,#9c2589)',
    live: 'https://claude.ai/artifact/GBMNX2kvqi3mhaf5uH76je',
  },
  {
    section: 'geospatial',
    name: 'Georeferencing old survey sheets',
    tagline: 'Survey of India sheets, 1914 to 1943, from library scan to map.',
    status: 'Demo',
    ribbon: 'Grid-anchored',
    desc: 'Traces the printed grid and turns every crossing into a reference point, then matches roads, canals and villages against today’s map to set the final correction. No one places a point by hand.',
    tags: ['Grid detection', 'Image matching', 'OpenStreetMap'],
    image: 'assets/projects/geo-sheets.jpg',
    visual: 'sheet',
    gradient: 'linear-gradient(135deg,#fef3c7,#fcd34d 55%,#c06510)',
    live: 'https://claude.ai/artifact/ArQFTvVibGbXjo2NNhwmng',
  },
  {
    section: 'geospatial',
    name: 'Reading historical maps',
    tagline: 'Black-and-white plans, repainted so roads and buildings come apart.',
    status: 'Demo',
    ribbon: 'Fully automatic',
    desc: 'An image model repaints old black-and-white plans in Ordnance Survey colours and marks the roads in red, so roads and buildings separate by colour alone, with no one tracing them by hand.',
    tags: ['Image model', 'Segmentation', 'Historical maps'],
    image: 'assets/projects/geo-colour.jpg',
    visual: 'segment',
    gradient: 'linear-gradient(135deg,#ecfccb,#bef264 55%,#4d7c0f)',
    live: 'https://claude.ai/artifact/JKYX9ZJKauksAVUcdEg4cv',
  },
  {
    section: 'geospatial',
    name: 'London Building Atlas',
    tagline: 'What London’s buildings are used for.',
    status: 'Live',
    ribbon: 'Open data only',
    desc: 'The open sources disagree on what even counts as a building, so every measure has a written contract: what it means, the evidence behind it, and what it cannot tell you.',
    tags: ['MapLibre', 'LiDAR', 'Open data'],
    image: 'assets/projects/atlas.jpg',
    visual: 'atlas',
    gradient: 'linear-gradient(135deg,#e0f2fe,#7dd3fc 55%,#0284c7)',
    live: 'https://londonbuildingfunction.geonarvis.com',
  },

  // ---------- Product ----------
  {
    section: 'product',
    name: 'Sunset Earth',
    tagline: 'Wherever it’s golden hour, right now.',
    status: 'Live',
    ribbon: '~150 live cameras',
    desc: 'Opens on whichever live camera in the world is in golden hour right now, picked by the weather and the sun.',
    tags: ['Next.js', 'Cloudflare Workers', 'D1'],
    image: 'assets/projects/sunset-earth.jpg',
    gradient: 'linear-gradient(135deg,#fde68a,#f9a8d4 55%,#a78bfa)',
    live: 'https://sunset-earth.com',
    repo: 'https://github.com/jiaazhaoo/sunset-earth',
  },
  {
    section: 'product',
    name: 'Karanow',
    tagline: 'Sing along to anything your Mac plays.',
    status: 'Live',
    ribbon: 'Real-time, on-device',
    desc: 'Takes the vocals out of whatever is playing, live, on your Mac. Built the whole way to saleable: trial, subscriptions, sign-in, updates.',
    tags: ['Swift', 'Deep learning', 'Stripe'],
    image: 'assets/projects/karanow.jpg',
    gradient: 'linear-gradient(135deg,#ffedd5,#fdba74 55%,#f97316)',
    live: 'https://karanow.com',
  },
  {
    section: 'product',
    name: 'Briffy',
    tagline: 'A notebook you don’t have to write.',
    status: 'Live',
    ribbon: 'Works offline',
    desc: 'Keeps what you saw, heard and were handed, finds any of it later, and never asks you to file a thing.',
    tags: ['Desktop', 'Search', 'Daily recap'],
    image: 'assets/projects/briffy.jpg',
    gradient: 'linear-gradient(135deg,#dbeafe,#93c5fd 55%,#3b82f6)',
    live: 'https://briffy.cc',
    repo: 'https://github.com/jiaazhaoo/briffy',
  },
];

// One sentence per role. Titles and dates match the CV exactly; the RMSI
// heading is the contractual title.
const EXPERIENCE = [
  { role: 'Project Lead', org: 'RMSI · AI automation team', when: 'Apr 2026 - Present',
    line: 'Lead the team automating geospatial production with AI, and design the evals that decide how far it can be trusted.' },
  { role: 'Data Engineer', org: 'RMSI', when: 'Aug 2025 - Apr 2026',
    line: 'Built the pipelines that read decades of scanned planning records: computer vision, geocoding and retrieval.' },
  { role: 'Product Manager', org: 'Zhizhou Future Technology', when: 'Sep 2022 - Aug 2023',
    line: 'Replaced describing the image you want with two clicks on a consumer text-to-image product, and 27% of existing users adopted it.' },
  { role: 'MSc Geographic Data Science and Spatial Analytics', org: 'University of Bristol', when: '2024' },
  { role: 'BEng Urban and Rural Planning', org: 'Central South University', when: '2022' },
];

/* =========================================================
   Rendering
   ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

const ICONS = {
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.770 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.170 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.230.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
};

// Cards with no screenshot to show draw their mechanism instead. Map labels
// are generic on purpose: no real address or client appears on this page.
const VISUALS = {
  freshair: `<div class="fa" aria-label="What FreshAir sends to the second model">
    <p class="fa-h">To a fresh model</p>
    <div class="fa-row"><span class="fa-ok">✓</span>The original ask</div>
    <div class="fa-row"><span class="fa-ok">✓</span>The current diff</div>
    <div class="fa-row fa-off"><span class="fa-no">✕</span>The reasoning in between</div>
  </div>`,
  atlas: `<div class="fa" aria-label="A data contract for one measure">
    <p class="fa-h">Data contract</p>
    <div class="fa-kv"><span>Means</span>building’s main use</div>
    <div class="fa-kv"><span>Evidence</span>tags, addresses, height</div>
    <div class="fa-kv fa-not"><span>Can’t say</span>one shop’s use</div>
  </div>`,
  sheet: `<svg class="geo" viewBox="0 0 400 260" preserveAspectRatio="xMinYMin slice" role="img" aria-label="An old survey sheet with every grid crossing marked as a reference point">
    <rect width="400" height="260" fill="#f2e9d4"/>
    <path d="M30 205 C 95 170, 150 228, 225 186 S 330 130, 400 158" fill="none" stroke="#6a9bc3" stroke-width="4" opacity=".75"/>
    <path d="M40 60 L 120 120 L 205 108 L 310 175 L 400 190" fill="none" stroke="#9a6b3f" stroke-width="2.4" stroke-dasharray="7 4" opacity=".7"/>
    <g fill="#9a6b3f" opacity=".55"><circle cx="160" cy="70" r="6"/><circle cx="262" cy="128" r="5"/><circle cx="95" cy="150" r="5"/></g>
    <g stroke="#9c2589" stroke-width="1.4" opacity=".85"><line x1="55" y1="26" x2="55" y2="250"/><line x1="130" y1="26" x2="130" y2="250"/><line x1="205" y1="26" x2="205" y2="250"/><line x1="280" y1="26" x2="280" y2="250"/><line x1="355" y1="26" x2="355" y2="250"/><line x1="30" y1="40" x2="400" y2="40"/><line x1="30" y1="100" x2="400" y2="100"/><line x1="30" y1="160" x2="400" y2="160"/><line x1="30" y1="220" x2="400" y2="220"/></g>
    <g fill="#c06510" stroke="#fff" stroke-width="1.5"><circle cx="55" cy="40" r="4.5"/><circle cx="55" cy="100" r="4.5"/><circle cx="55" cy="160" r="4.5"/><circle cx="55" cy="220" r="4.5"/><circle cx="130" cy="40" r="4.5"/><circle cx="130" cy="100" r="4.5"/><circle cx="130" cy="160" r="4.5"/><circle cx="130" cy="220" r="4.5"/><circle cx="205" cy="40" r="4.5"/><circle cx="205" cy="100" r="4.5"/><circle cx="205" cy="160" r="4.5"/><circle cx="205" cy="220" r="4.5"/><circle cx="280" cy="40" r="4.5"/><circle cx="280" cy="100" r="4.5"/><circle cx="280" cy="160" r="4.5"/><circle cx="280" cy="220" r="4.5"/><circle cx="355" cy="40" r="4.5"/><circle cx="355" cy="100" r="4.5"/><circle cx="355" cy="160" r="4.5"/><circle cx="355" cy="220" r="4.5"/></g>
    <g font-family="ui-monospace,Menlo,monospace" font-size="12" fill="#5b4a33"><text x="40" y="18">76°00′E</text><text x="118" y="18">05′</text><text x="193" y="18">10′</text><text x="2" y="44">30°30′</text></g>
  </svg>`,
  plan: `<svg class="geo" viewBox="0 0 400 260" preserveAspectRatio="xMinYMin slice" role="img" aria-label="A hand-drawn plan with its road names, a house number and the north arrow read automatically">
    <rect width="400" height="260" fill="#fbfbf8"/>
    <g fill="none" stroke="#2b2b2b" stroke-width="2.4" stroke-linecap="round">
      <path d="M20 150 C 90 142, 170 156, 250 146 S 360 150, 400 144"/><path d="M22 176 C 92 170, 172 182, 252 172 S 362 176, 400 170"/>
      <path d="M170 0 C 166 50, 174 100, 168 150"/><path d="M196 0 C 192 50, 200 100, 194 148"/>
    </g>
    <rect x="215" y="72" width="62" height="44" fill="none" stroke="#2b2b2b" stroke-width="1.6"/>
    <rect x="205" y="60" width="84" height="66" fill="none" stroke="#c06510" stroke-width="2.4" stroke-dasharray="7 5" transform="rotate(-8 247 93)"/>
    <g font-family="ui-monospace,Menlo,monospace" font-size="13">
      <rect x="44" y="118" width="96" height="22" fill="#fff" stroke="#9c2589" stroke-width="2"/><text x="52" y="134" fill="#9c2589">road name</text>
      <rect x="110" y="40" width="50" height="22" fill="#fff" stroke="#9c2589" stroke-width="2"/><text x="118" y="56" fill="#9c2589">road</text>
      <rect x="228" y="84" width="34" height="22" fill="#fff" stroke="#c06510" stroke-width="2"/><text x="236" y="100" fill="#c06510">12</text>
    </g>
    <g stroke="#c06510" stroke-width="2.4" fill="none" transform="rotate(-24 60 62)"><path d="M60 94 L60 32"/><path d="M50 46 L60 30 L70 46"/></g>
    <text x="38" y="30" font-family="Georgia,serif" font-size="16" fill="#c06510">N</text>
  </svg>`,
  segment: `<svg class="geo" viewBox="0 0 400 260" preserveAspectRatio="xMinYMin slice" role="img" aria-label="A historical map with its features segmented into coloured outlines">
    <rect width="400" height="260" fill="#efe5cc"/>
    <path d="M0 196 C 70 170, 120 214, 190 190 S 310 150, 400 176 L400 214 C 320 192, 250 236, 180 226 S 60 210, 0 236 Z" fill="#3b82f6" fill-opacity=".38" stroke="#1d4ed8" stroke-width="2"/>
    <g fill="#16a34a" fill-opacity=".3" stroke="#15803d" stroke-width="2">
      <path d="M24 30 L130 22 L142 104 L34 118 Z"/><path d="M262 20 L392 30 L382 116 L272 104 Z"/>
    </g>
    <g fill="#dc2626" fill-opacity=".42" stroke="#b91c1c" stroke-width="2">
      <rect x="168" y="38" width="30" height="24"/><rect x="206" y="44" width="22" height="30"/><rect x="170" y="74" width="40" height="22"/><rect x="214" y="84" width="26" height="20"/><rect x="186" y="110" width="34" height="24"/>
    </g>
    <path d="M0 150 C 90 140, 160 160, 250 140 S 360 128, 400 136" fill="none" stroke="#a16207" stroke-width="3.5" stroke-dasharray="1 0"/>
  </svg>`,
};

function renderContact() {
  $('#contact').innerHTML = [
    ['GitHub', PROFILE.github, 'github'],
    ['LinkedIn', PROFILE.linkedin, 'linkedin'],
    ['Email', `mailto:${PROFILE.email}`, 'mail'],
  ].map(([label, href, ic]) =>
    `<a href="${esc(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${ICONS[ic]}${label}</a>`).join('');
}

function renderProjects() {
  document.querySelectorAll('[data-grid]').forEach((grid) => {
  const cards = PROJECTS.filter((p) => p.section === grid.dataset.grid);
  grid.innerHTML = cards.map((p) => {
    const cls = { Live: 'live', 'In production': 'live', 'Open source': 'oss', Demo: 'demo', Shipped: 'shipped' }[p.status] || '';
    const links = [
      p.live && `<a href="${p.live}" target="_blank" rel="noopener" aria-label="${esc(p.name)} website">${ICONS.globe}</a>`,
      p.repo && `<a href="${p.repo}" target="_blank" rel="noopener" aria-label="${esc(p.name)} on GitHub">${ICONS.github}</a>`,
    ].filter(Boolean).join('');
    return `<article class="project">
      <div class="shot" style="--g:${p.gradient}">${p.ribbon ? `<span class="ribbon">${esc(p.ribbon)}</span>` : ''}
        <div class="shot-inner">${p.visual ? VISUALS[p.visual] : ''}${p.image ? `<img src="${p.image}" alt="${esc(p.name)} screenshot" loading="lazy"${p.visual ? ' class="over" onerror="this.remove()"' : ''}>` : ''}</div></div>
      <div class="p-head"><h3 class="p-name">${esc(p.name)}</h3><span class="status ${cls}">${esc(p.status)}</span></div>
      <p class="p-tag">${esc(p.tagline)}</p>
      <p class="p-desc">${esc(p.desc)}</p>
      <div class="p-foot"><div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div><div class="p-links">${links}</div></div>
    </article>`;
  }).join('') + (cards.length % 2 ? '<div class="project filler" aria-hidden="true"></div>' : '');
  });
}

function renderExperience() {
  $('#timeline').innerHTML = EXPERIENCE.map((e) => `<li>
    <div><div class="t-role">${esc(e.role)}</div><div class="t-org">${esc(e.org)}</div></div>
    <div class="t-when">${esc(e.when || '')}</div>
    ${e.line ? `<p class="t-desc">${esc(e.line)}</p>` : ''}</li>`).join('');
}

// Letters blur in once on load.
function roleIn() {
  const el = $('#role');
  el.innerHTML = [...el.textContent].map((c, j) => `<span class="ch" style="animation-delay:${j * 35}ms">${esc(c)}</span>`).join('');
}

/* ---------- Theme + scroll spy ---------- */
function chrome() {
  const root = document.documentElement;
  $('.theme-btn').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
  });
  const links = [...document.querySelectorAll('[data-nav]')];
  const spy = () => {
    const y = scrollY + 120;
    let cur = 'top';
    // Experience has no nav entry, so reaching it highlights nothing.
    ['ai', 'geospatial', 'product', 'experience'].forEach((id) => { if (document.getElementById(id).offsetTop <= y) cur = id; });
    if (innerHeight + scrollY >= document.body.scrollHeight - 4) cur = 'experience';
    links.forEach((a) => a.classList.toggle('active', a.dataset.nav === cur));
  };
  addEventListener('scroll', spy, { passive: true }); spy();
  $('#year').textContent = new Date().getFullYear();
}

renderContact();
renderProjects();
renderExperience();
roleIn();
chrome();
