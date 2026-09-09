/* Minimal by design — the content is the point.
   Two small niceties, both of which degrade to nothing. */

// 1. Keep the footer year honest without editing the file each time.
(function () {
  var el = document.getElementById('updated');
  if (el) el.textContent = String(new Date().getFullYear());
})();

// 2. Console-only reminder of what is still a placeholder, so an
//    unfinished href never ships silently. Delete once the page is done.
window.addEventListener('DOMContentLoaded', function () {
  var todos = document.querySelectorAll('[data-todo], a[href="#"]');
  if (todos.length) {
    console.info('[page] ' + todos.length + ' placeholder(s) still to fill in.');
  }
});
