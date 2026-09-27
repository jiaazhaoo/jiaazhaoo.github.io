/* =========================================================
   Content — edit this block to update the site.
   ========================================================= */
const PROFILE = {
  github: 'https://github.com/jiaazhaoo',
  linkedin: 'https://www.linkedin.com/in/jiazhao-career/',
  email: 'zhaojia789456@gmail.com',
};

const PROJECTS = [
  {
    name: 'briffy',
    tagline: 'A notebook you don’t have to write or tidy.',
    status: 'Live',
    ribbon: 'Works offline',
    desc: 'A desktop paperclip that files what you saw, heard and were handed. It reads text in screenshots, transcribes voice notes and finds any of it later, all on-device.',
    tags: ['On-device OCR', 'Speech-to-text', 'MCP'],
    image: 'assets/projects/briffy.jpg',
    gradient: 'linear-gradient(135deg,#dbeafe,#93c5fd 55%,#3b82f6)',
    live: 'https://briffy.cc',
    repo: 'https://github.com/jiaazhaoo/briffy',
  },
  {
    name: 'karanow',
    tagline: 'Turn anything your Mac plays into a backing track.',
    status: 'Live',
    ribbon: 'Real-time, on-device',
    desc: 'A local AI singing tool that removes vocals from any Mac audio in real time, with lyrics, a pitch runway and playback control.',
    tags: ['Swift', 'HTDemucs', 'ONNX Runtime'],
    image: 'assets/projects/karanow.jpg',
    gradient: 'linear-gradient(135deg,#ffedd5,#fdba74 55%,#f97316)',
    live: 'https://karanow.com',
  },
  {
    name: 'RapidEO Copilot',
    tagline: 'From a vague customer question to a traceable flood brief.',
    status: 'Pilot',
    ribbon: 'IoU 0.47 vs EMS',
    desc: 'Flood extent from real Sentinel-1 SAR, deterministic GIS exposure over OpenStreetMap, and a constrained LLM that plans and narrates but never computes the numbers.',
    tags: ['Sentinel-1', 'Computer Vision', 'LLM tools'],
    image: 'assets/projects/rapideo.jpg',
    gradient: 'linear-gradient(135deg,#e0f2fe,#7dd3fc 55%,#0284c7)',
  },
  {
    name: 'Sunset Earth',
    tagline: 'Wherever it’s golden hour, right now.',
    status: 'Live',
    ribbon: '~150 live cams',
    desc: 'Shows the live camera most likely to be in a good golden hour at this moment, picked by weather and distance to sunrise or sunset.',
    tags: ['Next.js', 'Cloudflare Workers', 'D1'],
    image: 'assets/projects/sunset-earth.jpg',
    gradient: 'linear-gradient(135deg,#fde68a,#f9a8d4 55%,#a78bfa)',
    live: 'https://sunset-earth.com',
    repo: 'https://github.com/jiaazhaoo/sunset-earth',
  },
];

const EXPERIENCE = [
  { role: 'Automation Lead (GIS)', org: 'RMSI · Reading', when: 'Apr 2026 — now',
    desc: 'Lead automation discovery across geospatial production and turn it into roadmaps and human-in-the-loop AI workflows.' },
  { role: 'Data Engineer', org: 'RMSI · Reading', when: 'Aug 2025 — Apr 2026',
    desc: 'Built the company’s first AI-assisted workflow for digitising historical planning documents, doubling delivery efficiency. Cut file access for 50+ users from about 60 s to 3 s.' },
  { role: 'Bicycle Mechanic (Volunteer)', org: 'Bike for Good · Glasgow', when: 'Jan — Aug 2025' },
  { role: 'Geographic Data Science', org: 'University of Bristol' },
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

function renderContact() {
  $('#contact').innerHTML = [
    ['GitHub', PROFILE.github, 'github'],
    ['LinkedIn', PROFILE.linkedin, 'linkedin'],
    ['Email', `mailto:${PROFILE.email}`, 'mail'],
  ].map(([label, href, ic]) =>
    `<a href="${esc(href)}"${href.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${ICONS[ic]}${label}</a>`).join('');
}

function renderProjects() {
  $('#project-grid').innerHTML = PROJECTS.map((p) => {
    const cls = p.status === 'Live' ? 'live' : p.status === 'Pilot' ? 'pilot' : '';
    const links = [
      p.live && `<a href="${p.live}" target="_blank" rel="noopener" aria-label="${esc(p.name)} website">${ICONS.globe}</a>`,
      p.repo && `<a href="${p.repo}" target="_blank" rel="noopener" aria-label="${esc(p.name)} on GitHub">${ICONS.github}</a>`,
    ].filter(Boolean).join('');
    return `<article class="project">
      <div class="shot" style="--g:${p.gradient}">${p.ribbon ? `<span class="ribbon">${esc(p.ribbon)}</span>` : ''}
        <div class="shot-inner"><img src="${p.image}" alt="${esc(p.name)} screenshot" loading="lazy"></div></div>
      <div class="p-head"><h3 class="p-name">${esc(p.name)}</h3><span class="status ${cls}">${esc(p.status)}</span></div>
      <p class="p-tag">${esc(p.tagline)}</p>
      <p class="p-desc">${esc(p.desc)}</p>
      <div class="p-foot"><div class="chips">${p.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join('')}</div><div class="p-links">${links}</div></div>
    </article>`;
  }).join('');
}

function renderExperience() {
  $('#timeline').innerHTML = EXPERIENCE.map((e) => `<li>
    <div><div class="t-role">${esc(e.role)}</div><div class="t-org">${esc(e.org)}</div></div>
    <div class="t-when">${esc(e.when || '')}</div>
    ${e.desc ? `<p class="t-desc">${esc(e.desc)}</p>` : ''}</li>`).join('');
}

// Letters blur in once on load.
function roleIn() {
  const el = $('#role');
  el.innerHTML = [...el.textContent].map((c, j) => `<span class="ch" style="animation-delay:${j * 35}ms">${esc(c)}</span>`).join('');
}

/* ---------- Pixel-art banner (golden hour / night) ---------- */
function banner() {
  const cv = $('#banner');
  const W = 204, H = 54, HOR = 38;
  cv.width = W; cv.height = H;
  const ctx = cv.getContext('2d');
  const img = ctx.createImageData(W, H);
  const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
  const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
  const PAL = {
    light: {
      sky: ['#35427a', '#5a5796', '#8f629f', '#c96f97', '#ec8d86', '#f6ae7b', '#fbd39a'].map(hex),
      sun: hex('#fff3c9'), glow: hex('#ffe1a6'),
      m: ['#8a6aa0', '#5f4c80', '#382e57'].map(hex),
      water: hex('#4a4478'), water2: hex('#5b5391'), refl: hex('#ffd7a0'),
    },
    dark: {
      sky: ['#05070f', '#080c1c', '#0c1329', '#121b39', '#1a2548', '#243157', '#2f3c63'].map(hex),
      sun: hex('#ecebdc'), glow: hex('#9aa4c4'),
      m: ['#1d2340', '#141931', '#0b0e1e'].map(hex),
      water: hex('#0a0e20'), water2: hex('#121934'), refl: hex('#c9ccd8'),
    },
  };
  // Ridge heights from a few seeded sines — deterministic so the scene is stable.
  const ridge = (x, base, amp, seed) =>
    base - amp * (0.55 * Math.sin(x * 0.045 + seed) + 0.3 * Math.sin(x * 0.11 + seed * 2.3) + 0.15 * Math.sin(x * 0.29 + seed * 5.1));
  const layers = [[HOR - 10, 7, 1.3], [HOR - 5, 6, 4.2], [HOR - 1, 4, 7.7]];
  const heights = layers.map(([b, a, s]) => Array.from({ length: W }, (_, x) => Math.round(ridge(x, b, a, s))));
  const stars = Array.from({ length: 46 }, (_, i) => [(i * 73 + 11) % W, (i * 29 + 5) % (HOR - 14), i]);
  const sunX = 146, sunY = HOR - 9, sunR = 6;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let last = 0;
  function draw(t) {
    const P = PAL[document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'];
    const night = P === PAL.dark;
    const d = img.data;
    const put = (x, y, c) => { if (x < 0 || y < 0 || x >= W || y >= H) return; const k = (y * W + x) * 4; d[k] = c[0]; d[k + 1] = c[1]; d[k + 2] = c[2]; d[k + 3] = 255; };
    // Sky with ordered dithering between bands
    for (let y = 0; y < HOR; y++) {
      const f = (y / HOR) * (P.sky.length - 1);
      const lo = Math.floor(f), fr = f - lo;
      for (let x = 0; x < W; x++) {
        const th = (bayer[(y % 4) * 4 + (x % 4)] + 0.5) / 16;
        put(x, y, P.sky[Math.min(P.sky.length - 1, fr > th ? lo + 1 : lo)]);
      }
    }
    if (night) stars.forEach(([x, y, i]) => { if (Math.sin(t / 700 + i * 1.7) > -0.3) put(x, y, i % 5 ? [150, 160, 190] : [235, 235, 245]); });
    // Sun / moon with a dithered glow ring
    for (let y = -sunR - 4; y <= sunR + 4; y++) for (let x = -sunR - 4; x <= sunR + 4; x++) {
      const r = Math.hypot(x, y);
      if (r <= sunR) put(sunX + x, sunY + y, P.sun);
      else if (r <= sunR + 3 && bayer[((y + 16) % 4) * 4 + ((x + 16) % 4)] < (sunR + 3 - r) * 6) put(sunX + x, sunY + y, P.glow);
    }
    if (night) for (let y = -sunR; y <= sunR; y++) for (let x = -sunR; x <= sunR; x++) {
      if (Math.hypot(x + 3, y - 1) <= sunR - 1 && Math.hypot(x, y) <= sunR) put(sunX + x, sunY + y, P.sky[3]); // crescent
    }
    // Satellite crossing the sky every ~24s (a nod to the EO work)
    const sx = Math.floor(((t / 120) % (W + 40)) - 20), sy = 7 + Math.round(4 * Math.sin(sx / 60));
    [[0, 0], [1, 0], [0, 1], [1, 1]].forEach(([a, b]) => put(sx + a, sy + b, [220, 224, 232]));
    [[-2, 0], [-3, 0], [3, 1], [4, 1]].forEach(([a, b]) => put(sx + a, sy + b, [242, 179, 61]));
    if (Math.floor(t / 400) % 2) put(sx + 1, sy + 2, [255, 90, 90]);
    // Mountains
    heights.forEach((hs, li) => { for (let x = 0; x < W; x++) for (let y = hs[x]; y < HOR; y++) put(x, y, P.m[li]); });
    // Water with shimmer and a broken reflection column
    for (let y = HOR; y < H; y++) {
      const depth = y - HOR;
      for (let x = 0; x < W; x++) {
        const wave = Math.sin(x * 0.35 + y * 1.7 + t / 500) > 0.86;
        put(x, y, wave ? P.water2 : P.water);
        const spread = 7 - depth * 0.28;
        const jitter = Math.sin(y * 2.1 + t / 300) * 2;
        if (Math.abs(x - sunX - jitter) < spread && (x + y + Math.floor(t / 250)) % 3) put(x, y, P.refl);
      }
    }
    ctx.putImageData(img, 0, 0);
  }
  function loop(t) {
    if (t - last > 80) { draw(t); last = t; }
    requestAnimationFrame(loop);
  }
  if (reduce) draw(0); else requestAnimationFrame(loop);
  return draw;
}


/* ---------- Theme + scroll spy ---------- */
function chrome(redrawBanner) {
  const root = document.documentElement;
  $('.theme-btn').addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    redrawBanner(performance.now());
  });
  const links = [...document.querySelectorAll('[data-nav]')];
  const spy = () => {
    const y = scrollY + 120;
    let cur = 'top';
    ['projects', 'experience'].forEach((id) => { if (document.getElementById(id).offsetTop <= y) cur = id; });
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
chrome(banner());
