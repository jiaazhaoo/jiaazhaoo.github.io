/* =========================================================
   Content — edit this block to update the site.
   ========================================================= */
const PROFILE = {
  github: 'https://github.com/jiaazhaoo',
  linkedin: 'https://www.linkedin.com/in/jiazhao-career/',
  email: 'zhaojia_pri@outlook.com',
};

// Grouped by the nav's three sections. Nothing here claims users for the
// side projects: shipped means live and complete, not adopted. The only
// adoption figure is Zhizhou's, the one product with real users.
const PROJECTS = [
  {
    section: 'ai',
    name: 'Briffy',
    tagline: 'A notebook you don’t have to write.',
    status: 'Live',
    ribbon: 'On-device',
    desc: 'Keeps what you saw, heard and were handed, reads it on your own machine, and hands it to your AI tools when they ask.',
    tags: ['Multimodal', 'On-device', 'MCP'],
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
  {
    section: 'geospatial',
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
    section: 'geospatial',
    name: 'London Building Atlas',
    tagline: 'What London’s buildings are used for.',
    status: 'Live',
    ribbon: 'Open data only',
    desc: 'The open sources disagree on what even counts as a building, so every measure has a written contract: what it means, the evidence behind it, and what it cannot tell you.',
    tags: ['MapLibre', 'LiDAR', 'Open data'],
    visual: 'atlas',
    gradient: 'linear-gradient(135deg,#e0f2fe,#7dd3fc 55%,#0284c7)',
    live: 'https://londonbuildingfunction.geonarvis.com',
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
    name: 'Two clicks to an image',
    tagline: 'Product Manager at Zhizhou, a consumer AI creation product.',
    status: 'Shipped',
    ribbon: '27% adopted',
    desc: 'People could not describe the image they wanted, so the product stopped asking them to. Two clicks to a finished image, and 27% of existing users adopted it.',
    tags: ['Text-to-image', 'Discord', 'Google Analytics'],
    visual: 'zhizhou',
    gradient: 'linear-gradient(135deg,#fce7f3,#f9a8d4 55%,#db2777)',
  },
];

// A timeline, not the CV: titles and dates match it exactly, the detail
// lives on the CV. The RMSI heading is the contractual title.
const EXPERIENCE = [
  { role: 'Project Lead', org: 'RMSI · AI automation team', when: 'Apr 2026 - Present' },
  { role: 'Data Engineer', org: 'RMSI', when: 'Aug 2025 - Apr 2026' },
  { role: 'Product Manager', org: 'Zhizhou Future Technology', when: 'Sep 2022 - Aug 2023' },
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

// Cards with no screenshot to show draw their mechanism instead.
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
  zhizhou: `<div class="fa" aria-label="Two clicks replaced describing the image">
    <p class="fa-h">From idea to image</p>
    <div class="fa-row fa-off"><span class="fa-no">✕</span>Describe what you want</div>
    <div class="fa-row"><span class="fa-ok">1</span>Click</div>
    <div class="fa-row"><span class="fa-ok">2</span>Click, and it’s done</div>
  </div>`,
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
  grid.innerHTML = PROJECTS.filter((p) => p.section === grid.dataset.grid).map((p) => {
    const cls = { Live: 'live', Pilot: 'pilot', 'Open source': 'oss', Shipped: 'shipped' }[p.status] || '';
    const links = [
      p.live && `<a href="${p.live}" target="_blank" rel="noopener" aria-label="${esc(p.name)} website">${ICONS.globe}</a>`,
      p.repo && `<a href="${p.repo}" target="_blank" rel="noopener" aria-label="${esc(p.name)} on GitHub">${ICONS.github}</a>`,
    ].filter(Boolean).join('');
    return `<article class="project">
      <div class="shot" style="--g:${p.gradient}">${p.ribbon ? `<span class="ribbon">${esc(p.ribbon)}</span>` : ''}
        <div class="shot-inner">${p.visual ? VISUALS[p.visual] : `<img src="${p.image}" alt="${esc(p.name)} screenshot" loading="lazy">`}</div></div>
      <div class="p-head"><h3 class="p-name">${esc(p.name)}</h3><span class="status ${cls}">${esc(p.status)}</span></div>
      <p class="p-tag">${esc(p.tagline)}</p>
      <p class="p-desc">${esc(p.desc)}</p>
      <div class="p-foot"><div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div><div class="p-links">${links}</div></div>
    </article>`;
  }).join('');
  });
}

function renderExperience() {
  $('#timeline').innerHTML = EXPERIENCE.map((e) => `<li>
    <div><div class="t-role">${esc(e.role)}</div><div class="t-org">${esc(e.org)}</div></div>
    <div class="t-when">${esc(e.when || '')}</div>
    ${e.points ? `<ul class="t-points">${e.points.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</li>`).join('');
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
