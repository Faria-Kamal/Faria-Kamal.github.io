/* Small, dependency-free interactions for the vintage portfolio. */
(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};

  // Footer year.
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Hero location line.
  var locationEl = document.getElementById("hero-location");
  if (locationEl && config.location) locationEl.textContent = "BASED — " + config.location;

  // Hairline timeline: a quiet sense of place in the story.
  var progressFill = document.getElementById("story-progress-fill");
  if (progressFill) {
    var updateProgress = function () {
      var doc = document.documentElement;
      var max = Math.max(0, doc.scrollHeight - window.innerHeight);
      var ratio = max > 0 ? window.pageYOffset / max : 0;
      progressFill.style.height = (Math.min(1, Math.max(0, ratio)) * 100) + "%";
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  // Approved contact details, rendered only when flagged as approved.
  var contactItems = [
    { label: "Email", value: config.email, href: config.email ? "mailto:" + config.email : "" },
    { label: "LinkedIn", value: config.linkedin, href: config.linkedin },
    { label: "GitHub", value: config.github, href: config.github }
  ].filter(function (item) { return item.value && item.href; });

  function renderContacts(target, className, asList) {
    if (!target || config.contactApproved !== true || !contactItems.length) return;
    target.innerHTML = contactItems.map(function (item) {
      var link = '<a class="' + className + '" href="' + item.href +
        '" rel="noopener noreferrer">' + item.label + " ↗</a>";
      return asList ? "<li>" + link + "</li>" : link;
    }).join("");
    var panel = document.querySelector(".contact-panel");
    if (panel) panel.classList.add("contact-approved");
    var status = document.querySelector(".contact-status");
    if (status) status.textContent = "CONTACT DETAILS — APPROVED";
  }
  renderContacts(document.getElementById("contact-links"), "contact-link", true);
  renderContacts(document.getElementById("corner-social"), "corner-link", false);

  // Bottom-left corner index menu.
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("corner-menu");
  var closeBtn = document.getElementById("menu-close");

  function setMenu(open) {
    if (!toggle || !menu) return;
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    var icon = toggle.querySelector(".menu-toggle-icon");
    var label = toggle.querySelector(".menu-toggle-label");
    if (icon) icon.textContent = open ? "×" : "+";
    if (label) label.textContent = open ? "Close" : "Menu";
  }

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      setMenu(menu.hidden);
    });
    if (closeBtn) closeBtn.addEventListener("click", function () { setMenu(false); });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () { setMenu(false); });
    });

    document.addEventListener("click", function (event) {
      if (menu.hidden) return;
      if (menu.contains(event.target) || toggle.contains(event.target)) return;
      setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !menu.hidden) {
        setMenu(false);
        toggle.focus();
      }
    });
  }

  // Gentle scroll reveal.
  var revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealItems.forEach(function (item) { observer.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add("is-visible"); });
  }
})();
