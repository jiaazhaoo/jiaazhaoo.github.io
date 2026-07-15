/* Minimal by design. A page like this barely needs JS —
   the content is the point. Two small niceties only. */

// 1. Smooth-scroll for in-page anchors.
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// 2. Warn (only in the console) about links you still need to fill in,
//    so an unfinished href never ships silently. Remove once done.
window.addEventListener('DOMContentLoaded', () => {
  const todos = document.querySelectorAll('[data-todo], a[href="#"]');
  if (todos.length) {
    console.info(`[page] ${todos.length} placeholder(s) still to fill in.`);
  }
});
