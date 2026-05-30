// neilsmith.photography — main.js

// Theme toggle
(function () {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('theme') || 'dark';
  root.setAttribute('data-theme', saved);
  if (toggle) toggle.textContent = saved === 'dark' ? '[ LIGHT ]' : '[ DARK ]';
  if (!toggle) return;
  toggle.addEventListener('click', function () {
    const current = root.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    toggle.textContent = next === 'dark' ? '[ LIGHT ]' : '[ DARK ]';
  });
})();

// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', function () {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// Gallery filter
(function () {
  const btns = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.gallery-item');
  if (!btns.length || !items.length) return;

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      items.forEach(function (item) {
        if (filter === 'all') {
          item.style.display = '';
        } else {
          const tags = item.getAttribute('data-tags') || '';
          item.style.display = tags.includes(filter) ? '' : 'none';
        }
      });
    });
  });
})();
