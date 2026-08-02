/**
 * Client entry point. Everything here is progressive enhancement — the page is
 * fully readable and navigable with this script blocked.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

/* ============================================================ theme toggle */
type Theme = 'dark' | 'light';

function currentTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle('dark', theme === 'dark');
  root.style.colorScheme = theme;
  try { localStorage.setItem('theme', theme); } catch { /* private mode */ }

  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
  });
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', theme === 'dark' ? '#05070d' : '#f6f5f1');

  window.dispatchEvent(new CustomEvent('themechange', { detail: { theme } }));
}

function initTheme() {
  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';

      // Circular wipe from the button when the browser supports it.
      const doc = document as Document & {
        startViewTransition?: (cb: () => void) => { ready: Promise<void> };
      };
      if (!reduced && typeof doc.startViewTransition === 'function') {
        const box = btn.getBoundingClientRect();
        const x = box.left + box.width / 2;
        const y = box.top + box.height / 2;
        const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

        const transition = doc.startViewTransition(() => applyTheme(next));
        transition.ready.then(() => {
          document.documentElement.animate(
            { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
            {
              duration: 620,
              easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
              pseudoElement: '::view-transition-new(root)',
            }
          );
        }).catch(() => { /* transition unsupported mid-flight */ });
      } else {
        applyTheme(next);
      }
    });
  });

  // Follow the OS only while the visitor hasn't chosen explicitly.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    let stored: string | null = null;
    try { stored = localStorage.getItem('theme'); } catch { /* ignore */ }
    if (!stored) applyTheme(e.matches ? 'dark' : 'light');
  });
}

/* ========================================================== smooth scroll */
function initSmoothScroll(): Lenis | null {
  if (reduced) return null;

  const lenis = new Lenis({
    duration: 1.1,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.6,
  });

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -84, duration: 1.25 });
      closeMobileMenu();
    });
  });

  return lenis;
}

/* ================================================================ reveals */
let revealsFired = false;

function initReveals() {
  const items = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!items.length) return;

  if (reduced) {
    items.forEach((el) => el.classList.add('is-visible'));
    revealsFired = true;
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealsFired = true;
        io.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  items.forEach((el) => io.observe(el));
}

/** Reveal everything, unconditionally. Used when the observer looks broken. */
function revealAll() {
  document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach((el) =>
    el.classList.add('is-visible')
  );
}

/* ======================================================== hero headline */
function initHeroHeadline() {
  const target = document.querySelector<HTMLElement>('[data-split]');
  if (!target) return;

  const source = target.textContent ?? '';
  target.textContent = '';
  target.setAttribute('aria-label', source);

  const frag = document.createDocumentFragment();
  const chars: HTMLElement[] = [];

  // Chars are inline-block, so the browser would happily break a line in the
  // middle of a name. Each word gets a nowrap box to keep breaks at spaces.
  for (const word of source.split(' ')) {
    const box = document.createElement('span');
    box.className = 'word';
    box.setAttribute('aria-hidden', 'true');

    for (const ch of word) {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = ch;
      box.appendChild(span);
      chars.push(span);
    }

    frag.appendChild(box);
    frag.appendChild(document.createTextNode(' '));
  }
  target.appendChild(frag);

  if (reduced) {
    chars.forEach((c) => { c.style.opacity = '1'; c.style.transform = 'none'; });
    return;
  }

  gsap.to(chars, {
    opacity: 1,
    y: 0,
    rotateX: 0,
    duration: 1.1,
    ease: 'expo.out',
    stagger: 0.035,
    delay: 0.35,
  });
}

/* ====================================================== rotating job title */
function initRoleRotator() {
  const el = document.querySelector<HTMLElement>('[data-roles]');
  if (!el) return;

  let roles: string[] = [];
  try { roles = JSON.parse(el.dataset.roles || '[]'); } catch { return; }
  if (roles.length < 2) return;

  const out = el.querySelector<HTMLElement>('[data-roles-text]');
  if (!out) return;

  if (reduced) { out.textContent = roles[0]; return; }

  let index = 0;
  let charIndex = 0;
  let deleting = false;

  const step = () => {
    const word = roles[index];
    charIndex += deleting ? -1 : 1;
    out.textContent = word.slice(0, charIndex);

    let delay = deleting ? 34 : 62;
    if (!deleting && charIndex === word.length) {
      delay = 1900;
      deleting = true;
    } else if (deleting && charIndex === 0) {
      deleting = false;
      index = (index + 1) % roles.length;
      delay = 320;
    }
    window.setTimeout(step, delay);
  };

  out.textContent = '';
  window.setTimeout(step, 1400);
}

/* ================================================================ 3D tilt */
function initTilt() {
  if (!finePointer || reduced) return;

  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    const max = Number(card.dataset.tilt) || 7;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      const box = card.getBoundingClientRect();
      const px = (e.clientX - box.left) / box.width;
      const py = (e.clientY - box.top) / box.height;

      // Feed the CSS spotlight gradient too.
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);

      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform =
          `perspective(900px) rotateX(${(0.5 - py) * max * 2}deg) rotateY(${(px - 0.5) * max * 2}deg) translateZ(0)`;
      });
    };

    const onLeave = () => {
      cancelAnimationFrame(raf);
      card.style.transform = '';
    };

    card.addEventListener('pointermove', onMove);
    card.addEventListener('pointerleave', onLeave);
  });
}

/* =========================================================== magnetic CTA */
function initMagnetic() {
  if (!finePointer || reduced) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic) || 0.32;

    el.addEventListener('pointermove', (e) => {
      const box = el.getBoundingClientRect();
      const dx = e.clientX - (box.left + box.width / 2);
      const dy = e.clientY - (box.top + box.height / 2);
      gsap.to(el, { x: dx * strength, y: dy * strength, duration: 0.5, ease: 'power3.out' });
    });

    el.addEventListener('pointerleave', () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

/* ============================================================== counters */
function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const raw = el.dataset.count || '';
    // Split "4,9/5" or "20+" into number + suffix so we only animate the digits.
    const match = raw.match(/^([\d.,]+)(.*)$/);
    if (!match) { el.textContent = raw; return; }

    const decimalSep = match[1].includes(',') ? ',' : '.';
    const value = parseFloat(match[1].replace(',', '.'));
    const decimals = (match[1].split(/[.,]/)[1] || '').length;
    const suffix = match[2];

    if (reduced || Number.isNaN(value)) { el.textContent = raw; return; }

    el.textContent = `0${suffix}`;
    const state = { n: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(state, {
          n: value,
          duration: 1.8,
          ease: 'expo.out',
          onUpdate: () => {
            el.textContent = state.n.toFixed(decimals).replace('.', decimalSep) + suffix;
          },
        });
      },
    });
  });
}

/* ======================================================== progress + nav */
function initScrollUI() {
  const bar = document.querySelector<HTMLElement>('[data-progress]');
  const header = document.querySelector<HTMLElement>('[data-header]');
  const toTop = document.querySelector<HTMLElement>('[data-to-top]');

  const onScroll = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? window.scrollY / max : 0;
    if (bar) bar.style.transform = `scaleX(${p})`;
    header?.classList.toggle('is-stuck', window.scrollY > 24);
    toTop?.classList.toggle('is-shown', window.scrollY > window.innerHeight * 0.9);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Active section highlighting.
  const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));
  const sections = links
    .map((l) => document.querySelector<HTMLElement>(l.getAttribute('href') || ''))
    .filter((s): s is HTMLElement => Boolean(s));

  if (!sections.length) return;

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) =>
          l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: '-45% 0px -50% 0px' }
  );
  sections.forEach((s) => spy.observe(s));
}

/* =========================================================== mobile menu */
function closeMobileMenu() {
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  const toggle = document.querySelector<HTMLElement>('[data-menu-toggle]');
  if (!menu || !menu.classList.contains('is-open')) return;
  menu.classList.remove('is-open');
  toggle?.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function initMobileMenu() {
  const toggle = document.querySelector<HTMLElement>('[data-menu-toggle]');
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) menu.querySelector<HTMLElement>('a')?.focus();
  });

  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMobileMenu));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeMobileMenu(); toggle.focus(); }
  });
}

/* ========================================================== copy to clip */
function initCopy() {
  document.querySelectorAll<HTMLElement>('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const value = btn.dataset.copy || '';
      try {
        await navigator.clipboard.writeText(value);
      } catch {
        // Clipboard API needs a secure context; fall back to the old selection
        // trick so copying still works over plain http or in older browsers.
        const ta = document.createElement('textarea');
        ta.value = value;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        const legacy = document as Document & { execCommand?: (c: string) => boolean };
        try { legacy.execCommand?.('copy'); } catch { /* nothing else to try */ }
        ta.remove();
      }
      btn.classList.add('is-copied');
      window.setTimeout(() => btn.classList.remove('is-copied'), 2000);
    });
  });
}

/* ========================================================== custom cursor */
function initCursor() {
  if (!finePointer || reduced) return;

  const dot = document.querySelector<HTMLElement>('[data-cursor-dot]');
  const ring = document.querySelector<HTMLElement>('[data-cursor-ring]');
  if (!dot || !ring) return;

  document.body.classList.add('has-custom-cursor');

  const pos = { x: innerWidth / 2, y: innerHeight / 2 };
  const ringPos = { ...pos };
  let raf = 0;

  let live = false;
  window.addEventListener('pointermove', (e) => {
    pos.x = e.clientX;
    pos.y = e.clientY;
    dot.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;

    // Reveal only once we know where the pointer actually is — otherwise both
    // elements sit in the top-left corner until the visitor moves the mouse.
    if (!live) {
      live = true;
      ringPos.x = pos.x;
      ringPos.y = pos.y;
      dot.classList.add('is-live');
      ring.classList.add('is-live');
    }

    if (!raf) raf = requestAnimationFrame(loop);
  }, { passive: true });

  function loop() {
    ringPos.x += (pos.x - ringPos.x) * 0.16;
    ringPos.y += (pos.y - ringPos.y) * 0.16;
    ring!.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;

    if (Math.abs(pos.x - ringPos.x) > 0.4 || Math.abs(pos.y - ringPos.y) > 0.4) {
      raf = requestAnimationFrame(loop);
    } else {
      raf = 0;
    }
  }

  document.querySelectorAll('a, button, [data-tilt], [data-tag], input, textarea').forEach((el) => {
    el.addEventListener('pointerenter', () => ring.classList.add('is-hover'));
    el.addEventListener('pointerleave', () => ring.classList.remove('is-hover'));
  });

  document.addEventListener('pointerleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('pointerenter', () => {
    dot.style.opacity = '';
    ring.style.opacity = '';
  });
}

/* ====================================================== scroll choreography */
function initScrollFX() {
  if (reduced) return;

  // Hero copy drifts up and fades as you leave it.
  const heroCopy = document.querySelector<HTMLElement>('[data-hero-copy]');
  if (heroCopy) {
    gsap.to(heroCopy, {
      y: -110,
      opacity: 0,
      ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.6 },
    });
  }

  // Timeline spine fills as the section scrolls past.
  const spine = document.querySelector<HTMLElement>('[data-timeline-fill]');
  if (spine) {
    gsap.fromTo(
      spine,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        transformOrigin: 'top center',
        scrollTrigger: { trigger: '[data-timeline]', start: 'top 72%', end: 'bottom 68%', scrub: 0.4 },
      }
    );
  }

  // Language proficiency bars.
  document.querySelectorAll<HTMLElement>('[data-bar]').forEach((bar) => {
    gsap.fromTo(
      bar,
      { scaleX: 0 },
      {
        scaleX: Number(bar.dataset.bar || 0) / 100,
        duration: 1.4,
        ease: 'expo.out',
        transformOrigin: 'left center',
        scrollTrigger: { trigger: bar, start: 'top 90%', once: true },
      }
    );
  });

  // Gentle depth parallax on decorative blobs.
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    gsap.to(el, {
      yPercent: Number(el.dataset.parallax || -14),
      ease: 'none',
      scrollTrigger: { trigger: el.parentElement || el, start: 'top bottom', end: 'bottom top', scrub: 1 },
    });
  });
}

/* ============================================================ 3D lazy-load */
function initHero3D() {
  const canvas = document.querySelector<HTMLCanvasElement>('[data-hero-canvas]');
  if (!canvas) return;

  // Don't ship a WebGL context to a device that will choke on it.
  const gl = document.createElement('canvas').getContext('webgl2') ||
             document.createElement('canvas').getContext('webgl');
  if (!gl) {
    canvas.closest('[data-hero-canvas-wrap]')?.classList.add('webgl-failed');
    return;
  }

  const start = () => {
    import('./hero-scene').then(({ initHeroScene }) => initHeroScene(canvas)).catch(() => {
      canvas.closest('[data-hero-canvas-wrap]')?.classList.add('webgl-failed');
    });
  };

  // Read it off a widened alias rather than testing `'x' in window`, which would
  // narrow `window` itself to `never` in the else branch.
  const ric = (window as Window & {
    requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
  }).requestIdleCallback;

  if (typeof ric === 'function') ric.call(window, start, { timeout: 900 });
  else window.setTimeout(start, 240);
}

function initSkillSphere() {
  const root = document.querySelector<HTMLElement>('[data-tag-sphere]');
  if (!root) return;

  const io = new IntersectionObserver((entries, obs) => {
    if (!entries[0].isIntersecting) return;
    obs.disconnect();
    // On failure the tags simply stay the flex-wrapped cloud they start as.
    import('./tag-sphere').then(({ initTagSphere }) => initTagSphere(root)).catch(() => {});
  }, { rootMargin: '250px' });

  io.observe(root);
}

/* ================================================================= boot */
/** Content starts at opacity:0, so one thrown init must not blank the page. */
function safely(name: string, fn: () => void) {
  try {
    fn();
  } catch (err) {
    console.warn(`[portfolio] ${name} failed:`, err);
  }
}

function boot() {
  document.documentElement.classList.add('js');

  safely('theme', initTheme);
  safely('smoothScroll', initSmoothScroll);
  safely('reveals', initReveals);
  safely('heroHeadline', initHeroHeadline);
  safely('roleRotator', initRoleRotator);
  safely('tilt', initTilt);
  safely('magnetic', initMagnetic);
  safely('counters', initCounters);
  safely('scrollUI', initScrollUI);
  safely('mobileMenu', initMobileMenu);
  safely('copy', initCopy);
  safely('cursor', initCursor);
  safely('scrollFX', initScrollFX);
  safely('hero3D', initHero3D);
  safely('skillSphere', initSkillSphere);

  // Last-resort net: if anything above silently stalled, show the content
  // anyway rather than leaving a reader staring at an empty page.
  window.setTimeout(() => {
    if (!revealsFired) {
      // The observer never fired once — assume it is broken and show it all,
      // rather than hiding the page below the fold forever.
      revealAll();
    } else {
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('is-visible');
      });
    }
    document.querySelectorAll<HTMLElement>('.char').forEach((c) => {
      if (getComputedStyle(c).opacity === '0') {
        c.style.opacity = '1';
        c.style.transform = 'none';
      }
    });
  }, 3000);

  // Lift the preloader once fonts have settled, so text doesn't reflow on screen.
  const shell = document.querySelector<HTMLElement>('[data-preloader]');
  const done = () => {
    shell?.classList.add('is-done');
    document.body.classList.add('is-ready');
    window.setTimeout(() => {
      shell?.remove();
      safely('scrollTrigger.refresh', () => ScrollTrigger.refresh());
    }, 900);
  };
  if (document.fonts?.ready) {
    document.fonts.ready.then(done).catch(done);
  } else {
    window.setTimeout(done, 400);
  }
  // Never let a stalled font load trap the visitor behind the preloader.
  window.setTimeout(done, 2500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
  boot();
}
