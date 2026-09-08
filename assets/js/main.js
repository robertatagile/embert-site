/* Embert Boerdery – klein, afhanklikheidsvrye skrip
   - mobiele kieslys
   - merk die aktiewe afdeling in die kieslys
   - sagte inskuif-animasie
   - kontakvorm wat die besoeker se e-posprogram oopmaak
*/
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');

  /* ---------- Mobiele kieslys ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  function setNav(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Sluit kieslys' : 'Maak kieslys oop');
  }

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      setNav(!nav.classList.contains('is-open'));
    });

    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (link) {
      link.addEventListener('click', function () { setNav(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && nav.classList.contains('is-open')) {
        setNav(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function (event) {
      if (nav.classList.contains('is-open') &&
          !nav.contains(event.target) &&
          !toggle.contains(event.target)) {
        setNav(false);
      }
    });
  }

  /* ---------- Aktiewe afdeling in kieslys ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) { return; }
        var id = '#' + entry.target.id;
        Array.prototype.forEach.call(navLinks, function (link) {
          if (link.getAttribute('href') === id) {
            link.setAttribute('aria-current', 'true');
          } else {
            link.removeAttribute('aria-current');
          }
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    Array.prototype.forEach.call(sections, function (section) {
      sectionObserver.observe(section);
    });
  }

  /* ---------- Sagte inskuif-animasie ---------- */
  var reveals = document.querySelectorAll('.reveal');
  var reduceMotion = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if ('IntersectionObserver' in window && !reduceMotion) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    Array.prototype.forEach.call(reveals, function (el) { revealObserver.observe(el); });
  } else {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Kontakvorm → e-posprogram ---------- */
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  var EMAIL = 'info@embert.co.za';

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var name = (form.elements.naam.value || '').trim();
      var email = (form.elements.epos.value || '').trim();
      var message = (form.elements.boodskap.value || '').trim();

      var subject = 'Navraag via embert.co.za' + (name ? ' – ' + name : '');
      var body = message + '\n\n' +
        (name ? 'Naam: ' + name + '\n' : '') +
        (email ? 'E-pos: ' + email + '\n' : '');

      window.location.href = 'mailto:' + EMAIL +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      if (status) {
        status.textContent = 'Jou e-posprogram behoort nou oop te maak. ' +
          'Indien nie, stuur gerus jou boodskap direk na ' + EMAIL + '.';
      }
    });
  }

  /* ---------- Jaar in voetstuk ---------- */
  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }
})();
