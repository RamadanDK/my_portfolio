/**
 * PREMIUM PORTFOLIO 2026 — script.js
 * Pure Vanilla JS | No libraries
 */

// Custom cursor dihapus — menggunakan cursor browser default

// ─── Loading Screen ────────────────────────────────────────────
(function () {
  const screen = document.getElementById('loading-screen');
  const fill   = document.getElementById('loader-fill');
  const pct    = document.getElementById('loader-percent');
  if (!screen) return;

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 18 + 6;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        screen.classList.add('hide');
        document.body.style.overflow = '';
      }, 300);
    }
    if (fill) fill.style.width = progress + '%';
    if (pct)  pct.textContent  = Math.round(progress) + '%';
  }, 90);

  document.body.style.overflow = 'hidden';
})();

// ─── Navbar ────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
let ticking = false;

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      ticking = false;
    });
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });


// Mobile hamburger
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobile-nav');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.mobile-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
  });
});

// ─── Dark Mode ─────────────────────────────────────────────────
const darkToggle   = document.getElementById('dark-toggle');
const darkToggleMob = document.getElementById('dark-toggle-mob');
const htmlEl       = document.documentElement;

function setDark(isDark) {
  if (isDark) {
    htmlEl.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    htmlEl.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  updateDarkIcons();
}

function updateDarkIcons() {
  const isDark = htmlEl.classList.contains('dark');
  document.querySelectorAll('.icon-sun').forEach(el => {
    el.style.display = isDark ? 'block' : 'none';
  });
  document.querySelectorAll('.icon-moon').forEach(el => {
    el.style.display = isDark ? 'none' : 'block';
  });
}

// Init from localStorage
const saved = localStorage.getItem('theme');
if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  htmlEl.classList.add('dark');
}
updateDarkIcons();

darkToggle?.addEventListener('click', () => setDark(!htmlEl.classList.contains('dark')));
darkToggleMob?.addEventListener('click', () => setDark(!htmlEl.classList.contains('dark')));

// ─── Scroll Reveal (Intersection Observer) ─────────────────────
const revealEls = document.querySelectorAll('.reveal, .reveal-scale, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ─── Count-Up Animation ────────────────────────────────────────
function countUp(el, target, duration = 1800) {
  const suffix = el.dataset.suffix || '';
  let start = null;
  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterEls = document.querySelectorAll('[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      countUp(el, parseInt(el.dataset.count), 1800);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
counterEls.forEach(el => counterObserver.observe(el));

// ─── Skill Bar Animation ───────────────────────────────────────
const skillBars = document.querySelectorAll('.skill-fill');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.style.width = el.dataset.width + '%';
      skillObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });
skillBars.forEach(el => skillObserver.observe(el));

// ─── FAQ Accordion ─────────────────────────────────────────────
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ─── Testimonial Slider ────────────────────────────────────────
(function () {
  const track  = document.getElementById('testimonial-track');
  const dots   = document.querySelectorAll('.slider-dot');
  const prev   = document.getElementById('slider-prev');
  const next   = document.getElementById('slider-next');
  if (!track) return;

  let current  = 0;
  let perView  = getPerView();
  let total    = track.children.length;
  let maxSlide = Math.max(0, total - perView);
  let autoTimer;

  function getPerView() {
    return window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
  }

  function goTo(idx) {
    perView  = getPerView();
    maxSlide = Math.max(0, total - perView);
    current  = Math.max(0, Math.min(idx, maxSlide));
    const cardWidth = track.children[0].offsetWidth + 24; // gap 1.5rem = 24px
    track.style.transform = `translateX(-${current * cardWidth}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prev?.addEventListener('click', () => goTo(current - 1));
  next?.addEventListener('click', () => goTo(current + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goTo(i)));

  function startAuto() {
    autoTimer = setInterval(() => {
      goTo(current >= maxSlide ? 0 : current + 1);
    }, 4000);
  }
  startAuto();
  track.parentElement.addEventListener('mouseenter', () => clearInterval(autoTimer));
  track.parentElement.addEventListener('mouseleave', startAuto);

  window.addEventListener('resize', debounce(() => goTo(current), 200));
  goTo(0);
})();

// ─── Portfolio Filter ──────────────────────────────────────────
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioCards.forEach(card => {
      const cat = card.dataset.category;
      if (filter === 'all' || cat === filter) {
        card.style.display = '';
        setTimeout(() => card.style.opacity = '1', 10);
      } else {
        card.style.opacity = '0';
        setTimeout(() => card.style.display = 'none', 300);
      }
    });
  });
});

// ─── Card Tilt Effect ──────────────────────────────────────────
document.querySelectorAll('.service-card, .why-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    card.style.transform = `translateY(-6px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'transform 0.4s ease';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s linear, box-shadow 0.35s ease, border-color 0.35s ease';
  });
});

// ─── Mouse Parallax Hero ───────────────────────────────────────
const heroSection = document.getElementById('hero');
window.addEventListener('mousemove', e => {
  if (!heroSection) return;
  const rect = heroSection.getBoundingClientRect();
  if (e.clientY < rect.bottom && e.clientY > rect.top) {
    const mx = (e.clientX / window.innerWidth  - 0.5) * 20;
    const my = (e.clientY / window.innerHeight - 0.5) * 20;
    document.querySelectorAll('.floating-shape').forEach(el => {
      const speed = parseFloat(el.dataset.speed || 0.3);
      el.style.transform = `translate(${mx * speed}px, ${my * speed}px)`;
    });
  }
});

// ─── Ripple Effect on Buttons ──────────────────────────────────
document.querySelectorAll('.btn-primary, .btn-white').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect   = btn.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height);
    ripple.classList.add('ripple-effect');
    ripple.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${e.clientX - rect.left - size/2}px;
      top:  ${e.clientY - rect.top  - size/2}px;
    `;
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

// ─── Back To Top ───────────────────────────────────────────────
document.getElementById('back-top')?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ─── Smooth scroll for nav links ───────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ─── Auto year footer ─────────────────────────────────────────
const yearEl = document.getElementById('footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ─── Utility: Debounce ─────────────────────────────────────────
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// ─── Animated gradient on hero heading ────────────────────────
(function () {
  const heading = document.querySelector('.hero-title .highlight');
  if (!heading) return;
  let angle = 135;
  setInterval(() => {
    angle = (angle + 0.5) % 360;
    heading.style.backgroundImage = `linear-gradient(${angle}deg, #0d9468, #14b8a6, #0891b2)`;
  }, 30);
})();
