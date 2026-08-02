/**
 * Draggable 3D tag sphere.
 *
 * DOM-based rather than WebGL: the labels stay real text (selectable,
 * translatable, readable by screen readers) while still being projected
 * through a proper perspective transform. Cheap enough to run alongside the
 * hero scene without a second WebGL context.
 */

type Item = { el: HTMLElement; x: number; y: number; z: number };

export function initTagSphere(root: HTMLElement) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const els = Array.from(root.querySelectorAll<HTMLElement>('[data-tag]'));
  if (!els.length) return () => {};

  // Hand positioning over to this script; until now the tags were a plain
  // flex-wrapped cloud so the section still reads without JS.
  root.classList.add('is-3d');

  const items: Item[] = [];
  const n = els.length;
  const golden = Math.PI * (3 - Math.sqrt(5));

  els.forEach((el, i) => {
    const y = 1 - (i / (n - 1 || 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    items.push({ el, x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  });

  let radius = 0;
  const measure = () => {
    const box = root.getBoundingClientRect();
    radius = Math.min(box.width, box.height) * 0.42;
  };
  measure();

  // Rotation state: `v` is angular velocity, decayed each frame.
  let ax = -0.25;
  let ay = 0.4;
  let vx = 0;
  let vy = reduced ? 0 : 0.0022;

  let dragging = false;
  let lastX = 0;
  let lastY = 0;
  let moved = 0;

  const onDown = (e: PointerEvent) => {
    dragging = true;
    moved = 0;
    lastX = e.clientX;
    lastY = e.clientY;
    root.setPointerCapture(e.pointerId);
    root.classList.add('is-grabbing');
  };
  const onMove = (e: PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - lastX;
    const dy = e.clientY - lastY;
    lastX = e.clientX;
    lastY = e.clientY;
    moved += Math.abs(dx) + Math.abs(dy);
    vy = dx * 0.00022;
    vx = -dy * 0.00022;
    ay += dx * 0.0055;
    ax -= dy * 0.0055;
  };
  const onUp = (e: PointerEvent) => {
    if (!dragging) return;
    dragging = false;
    try { root.releasePointerCapture(e.pointerId); } catch { /* already released */ }
    root.classList.remove('is-grabbing');
    // A tap (not a drag) on a tag shouldn't be swallowed.
    if (moved < 6) return;
  };

  root.addEventListener('pointerdown', onDown);
  root.addEventListener('pointermove', onMove, { passive: true });
  root.addEventListener('pointerup', onUp);
  root.addEventListener('pointercancel', onUp);

  const ro = new ResizeObserver(measure);
  ro.observe(root);

  let onScreen = true;
  const io = new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; }, { threshold: 0 });
  io.observe(root);

  let raf = 0;
  const render = () => {
    raf = requestAnimationFrame(render);
    if (!onScreen || document.hidden) return;

    if (!dragging) {
      ax += vx;
      ay += vy;
      // Friction, easing back to a slow idle spin.
      vx *= 0.94;
      vy = reduced ? 0 : vy * 0.94 + 0.0022 * 0.06;
    }

    const sinX = Math.sin(ax), cosX = Math.cos(ax);
    const sinY = Math.sin(ay), cosY = Math.cos(ay);

    for (const it of items) {
      // Rotate around Y then X.
      const x1 = it.x * cosY - it.z * sinY;
      const z1 = it.x * sinY + it.z * cosY;
      const y2 = it.y * cosX - z1 * sinX;
      const z2 = it.y * sinX + z1 * cosX;

      // Perspective: depth 2 units behind the sphere centre.
      const scale = 2 / (2.6 - z2);
      const px = x1 * radius * scale;
      const py = y2 * radius * scale;

      // Fade and shrink the back hemisphere.
      const depth = (z2 + 1) / 2; // 0 = far, 1 = near
      const opacity = 0.18 + depth * 0.82;

      // top/left are pinned to 50%, so the -50% shift centres each tag on its
      // projected point before the depth scale is applied.
      it.el.style.transform =
        `translate(-50%, -50%) translate3d(${px.toFixed(1)}px, ${py.toFixed(1)}px, 0) scale(${(0.62 + depth * 0.52).toFixed(3)})`;
      it.el.style.opacity = opacity.toFixed(3);
      it.el.style.zIndex = String(Math.round(depth * 100));
      // Keep far-side tags from stealing pointer events.
      it.el.style.pointerEvents = depth > 0.55 ? 'auto' : 'none';
    }
  };
  render();

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    root.removeEventListener('pointerdown', onDown);
    root.removeEventListener('pointermove', onMove);
    root.removeEventListener('pointerup', onUp);
    root.removeEventListener('pointercancel', onUp);
  };
}
