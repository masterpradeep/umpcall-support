(function () {
  var body = document.querySelector('.doc-panel-body');
  var list = document.getElementById('doc-toc-list');
  var aside = document.getElementById('doc-toc-aside');
  var mobile = document.getElementById('doc-toc-mobile');
  var mobileScroll = document.getElementById('doc-toc-mobile-scroll');
  if (!body || !list || !aside || !mobile || !mobileScroll) return;

  var headings = body.querySelectorAll('h2');
  if (!headings.length) return;

  function slugify(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }

  function label(text) {
    return text.replace(/^\d+\.\s*/, '').trim();
  }

  headings.forEach(function (h, index) {
    if (!h.id) {
      h.id = slugify(h.textContent) || 'section-' + (index + 1);
    }

    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = label(h.textContent);
    a.dataset.target = h.id;
    li.appendChild(a);
    list.appendChild(li);

    var chip = document.createElement('a');
    chip.href = '#' + h.id;
    chip.className = 'doc-toc-chip';
    chip.textContent = label(h.textContent);
    chip.dataset.target = h.id;
    mobileScroll.appendChild(chip);
  });

  aside.hidden = false;
  mobile.hidden = false;

  var links = document.querySelectorAll('[data-target]');

  function setActive(id) {
    links.forEach(function (link) {
      var active = link.dataset.target === id;
      link.classList.toggle('is-active', active);
      if (active && link.classList.contains('doc-toc-chip')) {
        link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    });
  }

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (e) { return e.isIntersecting; })
          .sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
    );
    headings.forEach(function (h) { observer.observe(h); });
  }
})();
