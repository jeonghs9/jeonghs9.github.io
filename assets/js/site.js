(function () {
  document.documentElement.classList.add("js");

  // Theme toggle
  var STORAGE_KEY = "theme-preference";
  var root = document.documentElement;

  var stored = null;
  try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }

  function applyTheme(next) {
    root.setAttribute("data-theme", next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
  }

  function currentTheme() {
    var attr = root.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  }

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".theme-toggle");
    if (!btn) return;
    applyTheme(currentTheme() === "dark" ? "light" : "dark");
  });

  // Header shadow on scroll
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 4) header.classList.add("is-scrolled");
      else header.classList.remove("is-scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
