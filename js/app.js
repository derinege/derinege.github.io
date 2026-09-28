/* Renders the lists in index.html from window.SITE (js/content.js).
   Also: theme toggle, project filters, scroll-spy nav, reveal-on-scroll. */
(function () {
  "use strict";
  var S = window.SITE;
  if (!S) return;

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  var ICON = {
    external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M8 7h9v9"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.7 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.05.78 2.12v3.15c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
    file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>'
  };

  /* ---------------- Helpers ---------------- */
  function tags(list, cls) {
    if (!list || !list.length) return "";
    return '<ul class="tags" aria-label="Technologies">' + list.map(function (t) {
      return '<li class="tag' + (cls ? " " + cls : "") + '">' + esc(t) + "</li>";
    }).join("") + "</ul>";
  }
  function linkIcon(href, label, icon) {
    if (!href) return "";
    return '<a href="' + esc(href) + '" target="_blank" rel="noopener" aria-label="' + esc(label) + '" title="' + esc(label) + '">' + icon + "</a>";
  }

  /* ---------------- Experience / Education ---------------- */
  function xpItem(x) {
    var co = x.url
      ? '<a href="' + esc(x.url) + '" target="_blank" rel="noopener">' + esc(x.org) + "</a>"
      : esc(x.org);
    var bullets = x.bullets && x.bullets.length
      ? '<ul class="xp__bullets">' + x.bullets.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>"
      : "";
    var note = x.note ? '<p class="xp__note" style="margin:8px 0 0;color:var(--text-2);font-size:.95rem">' + x.note + "</p>" : "";
    return (
      '<article class="xp__item reveal">' +
        '<div class="xp__date">' + esc(x.period) + "</div>" +
        "<div>" +
          '<h3 class="xp__role">' + esc(x.role) + ' <span class="xp__co">· ' + co + "</span></h3>" +
          (x.location ? '<div class="xp__loc">' + esc(x.location) + "</div>" : "") +
          note + bullets + tags(x.tags, "tag--muted") +
        "</div>" +
      "</article>"
    );
  }
  function renderXp(list, mountId) {
    var m = $(mountId);
    if (!m) return;
    m.innerHTML = (list || []).map(xpItem).join("");
  }
  renderXp(S.experience, "#experience-list");
  renderXp(S.education, "#education-list");

  /* ---------------- Projects ---------------- */
  var CATS = S.categories || {};
  var published = (S.projects || []).filter(function (p) { return p.published !== false; });

  function projectCard(p) {
    var hasLink = !!(p.url || p.repo);
    var primary = p.url || p.repo;
    var links = "";
    if (p.repo && p.url && p.url !== p.repo) links += linkIcon(p.repo, "Source on GitHub", ICON.github);
    if (p.url) links += linkIcon(p.url, "Open", ICON.external);
    else if (p.repo) links += linkIcon(p.repo, "Source on GitHub", ICON.github);
    var status = p.status || (hasLink ? "" : "Code on request");
    var right = (status ? '<span class="project__status">' + esc(status) + "</span>" : "") + links;
    var title = hasLink
      ? '<a href="' + esc(primary) + '" target="_blank" rel="noopener">' + esc(p.title) + "</a>"
      : esc(p.title);
    var cat = CATS[p.category] || p.category || "";
    return (
      '<article class="card project reveal' + (p.featured ? " project--featured" : "") + '" data-cat="' + esc(p.category) + '">' +
        '<div class="project__head"><div>' +
          '<p class="project__cat">' + esc(cat) + (p.year ? ' <span class="project__year">· ' + esc(p.year) + "</span>" : "") + "</p>" +
          '<h3 class="project__title">' + title + "</h3>" +
        "</div>" +
        '<div class="project__links">' + right + "</div></div>" +
        (p.metric ? '<p class="project__metric">' + esc(p.metric) + "</p>" : "") +
        '<p class="project__desc">' + p.description + "</p>" +
        tags(p.tags) +
      "</article>"
    );
  }

  var grid = $("#project-grid");
  var filters = $("#project-filters");
  var activeFilter = "all";

  function renderProjects() {
    if (!grid) return;
    var list = published.filter(function (p) { return activeFilter === "all" || p.category === activeFilter; });
    // featured first; otherwise keep the editorial order from content.js
    list = list.filter(function (p) { return p.featured; }).concat(list.filter(function (p) { return !p.featured; }));
    grid.innerHTML = list.length ? list.map(projectCard).join("") : '<p class="empty">Nothing in this category yet.</p>';
    observeReveals(grid);
  }

  function renderFilters() {
    if (!filters) return;
    var counts = {};
    published.forEach(function (p) { counts[p.category] = (counts[p.category] || 0) + 1; });
    var order = Object.keys(CATS).filter(function (k) { return counts[k]; });
    var html = chip("all", "All", published.length);
    order.forEach(function (k) { html += chip(k, CATS[k], counts[k]); });
    filters.innerHTML = html;
    filters.addEventListener("click", function (e) {
      var b = e.target.closest(".chip");
      if (!b) return;
      activeFilter = b.dataset.filter;
      $$(".chip", filters).forEach(function (c) { c.setAttribute("aria-pressed", String(c === b)); });
      renderProjects();
    });
  }
  function chip(key, label, count) {
    return '<button type="button" class="chip" data-filter="' + esc(key) + '" aria-pressed="' + (key === activeFilter) + '">' +
      esc(label) + '<span class="chip__count">' + count + "</span></button>";
  }
  renderFilters();
  renderProjects();

  /* ---------------- Writing ---------------- */
  function postItem(w) {
    var meta = "";
    if (w.dateLabel) meta += '<time datetime="' + esc(w.date || "") + '">' + esc(w.dateLabel) + "</time>";
    if (w.lang) meta += '<span class="pill">' + esc(w.lang) + "</span>";
    if (w.type) meta += "<span>" + esc(w.type) + "</span>";
    if (w.length) meta += "<span>" + esc(w.length) + "</span>";
    var cta = w.cta || "Read";
    return (
      '<a class="post reveal" href="' + esc(w.href) + '"' + (w.external ? ' target="_blank" rel="noopener"' : "") + ">" +
        '<div class="post__meta">' + meta + "</div>" +
        '<h3 class="post__title">' + esc(w.title) + "</h3>" +
        (w.summary ? '<p class="post__summary">' + w.summary + "</p>" : "") +
        '<span class="post__cta">' + esc(cta) + ICON.arrow + "</span>" +
      "</a>"
    );
  }
  var wl = $("#writing-list");
  if (wl) {
    var posts = (S.writing || []).filter(function (w) { return w.published !== false; });
    wl.innerHTML = posts.length ? posts.map(postItem).join("") : '<p class="empty">Nothing published yet.</p>';
  }

  /* ---------------- Skills ---------------- */
  var sk = $("#skills-list");
  if (sk) {
    sk.innerHTML = (S.skills || []).map(function (g) {
      return '<div class="skill-group reveal"><h3>' + esc(g.group) + "</h3>" + tags(g.items, "tag--muted") + "</div>";
    }).join("");
  }

  /* ---------------- Scroll-spy ---------------- */
  var navLinks = $$(".nav a");
  var sections = $$("main section[id]");
  if (navLinks.length && sections.length) {
    var byId = {};
    navLinks.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var ticking = false;
    function updateSpy() {
      ticking = false;
      var probe = window.scrollY + window.innerHeight * 0.4;
      var atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      var current = sections[0];
      sections.forEach(function (s) { if (s.offsetTop <= probe) current = s; });
      if (atBottom) current = sections[sections.length - 1];
      navLinks.forEach(function (a) { a.classList.toggle("is-active", a === byId[current.id]); });
    }
    window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(updateSpy); }
    }, { passive: true });
    window.addEventListener("resize", updateSpy);
    updateSpy();
  }

  /* ---------------- Reveal ---------------- */
  var revealer = null;
  if ("IntersectionObserver" in window) {
    revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); revealer.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
  }
  function observeReveals(scope) {
    $$(".reveal:not(.in)", scope).forEach(function (el) {
      if (revealer) revealer.observe(el); else el.classList.add("in");
    });
  }
  observeReveals(document);

  /* ---------------- Footer year ---------------- */
  var y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
})();
