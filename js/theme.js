/* Light/dark toggle shared by every page. Stores the choice in localStorage when available. */
(function () {
  var root = document.documentElement;
  function effective() {
    var a = root.getAttribute("data-theme");
    if (a) return a;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  function sync() {
    var b = document.getElementById("theme-toggle");
    if (!b) return;
    var t = effective();
    b.dataset.mode = t;
    b.setAttribute("aria-label", t === "dark" ? "Switch to light theme" : "Switch to dark theme");
  }
  function apply(t) {
    if (t) root.setAttribute("data-theme", t); else root.removeAttribute("data-theme");
    try { if (t) localStorage.setItem("theme", t); else localStorage.removeItem("theme"); } catch (e) { /* storage unavailable */ }
    sync();
  }
  function init() {
    var b = document.getElementById("theme-toggle");
    if (b) b.addEventListener("click", function () { apply(effective() === "dark" ? "light" : "dark"); });
    if (window.matchMedia) {
      var mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.addEventListener) mq.addEventListener("change", sync);
    }
    sync();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
