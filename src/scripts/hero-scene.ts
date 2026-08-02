/**
 * Hero 3D scene — a shader-driven "neural core".
 *
 * A shell of ~14k GPU particles displaced by 3D simplex noise, wrapped in a
 * counter-rotating wireframe icosahedron and an orbiting dust ring. Colours are
 * uniforms so a theme switch cross-fades instead of re-instantiating the scene.
 *
 * Degrades safely: bails out on no-WebGL, honours prefers-reduced-motion,
 * pauses when scrolled out of view or when the tab is hidden.
 */
import * as THREE from 'three';

const SIMPLEX = /* glsl */ `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}

float snoise(vec3 v){
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
`;

const VERT = /* glsl */ `
uniform float uTime;
uniform float uSize;
uniform float uAmp;
uniform float uProgress;
uniform float uPixelRatio;
uniform vec2  uPointer;

attribute float aRandom;
attribute float aScale;

varying float vMix;
varying float vAlpha;

${SIMPLEX}

void main() {
  vec3 pos = position;
  vec3 dir = normalize(pos);

  // Two octaves of noise breathing through the shell.
  float n1 = snoise(pos * 0.85 + vec3(0.0, 0.0, uTime * 0.16));
  float n2 = snoise(pos * 2.30 - vec3(uTime * 0.11, 0.0, 0.0));
  float disp = n1 * uAmp + n2 * uAmp * 0.34;
  pos += dir * disp;

  // Latitude-dependent swirl so the core never reads as a rigid ball.
  float twist = n1 * 0.55 + uTime * 0.05;
  float c = cos(twist), s = sin(twist);
  pos.xz = mat2(c, -s, s, c) * pos.xz;

  // Pointer pushes the near hemisphere outward — a soft magnetic dent.
  float facing = smoothstep(0.0, 1.0, dot(dir, normalize(vec3(uPointer, 1.0))));
  pos += dir * facing * 0.30;

  // Intro: particles fly in from the centre.
  pos = mix(dir * 0.05, pos, uProgress);

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mv;

  gl_PointSize = uSize * aScale * uPixelRatio * (1.0 / -mv.z);

  vMix = clamp(disp * 0.9 + 0.5, 0.0, 1.0);
  vAlpha = (0.35 + aRandom * 0.65) * uProgress;
}
`;

const FRAG = /* glsl */ `
uniform vec3 uColorA;
uniform vec3 uColorB;
uniform vec3 uColorC;
uniform float uOpacity;

varying float vMix;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;

  // Soft core + halo instead of a hard disc.
  float core = smoothstep(0.5, 0.0, d);
  float alpha = core * core;

  vec3 col = mix(uColorA, uColorB, smoothstep(0.15, 0.85, vMix));
  col = mix(col, uColorC, smoothstep(0.72, 1.0, vMix) * 0.65);

  gl_FragColor = vec4(col, alpha * vAlpha * uOpacity);
}
`;

type Palette = { a: THREE.Color; b: THREE.Color; c: THREE.Color; wire: THREE.Color };

const PALETTES: Record<'dark' | 'light', Palette> = {
  dark: {
    a: new THREE.Color('#ff6b2c'),
    b: new THREE.Color('#22d3ee'),
    c: new THREE.Color('#8b7cff'),
    wire: new THREE.Color('#ff8a4c'),
  },
  light: {
    a: new THREE.Color('#f2662a'),
    b: new THREE.Color('#12a8c4'),
    c: new THREE.Color('#7a63f0'),
    wire: new THREE.Color('#d94f16'),
  },
};

/** The canvas is transparent, so additive particles still composite *over* the
 *  page. On cream that reads as speckle unless we pull the opacity right down. */
const SHELL_OPACITY = { dark: 1.0, light: 0.42 };

export function initHeroScene(canvas: HTMLCanvasElement) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
    });
  } catch {
    canvas.closest('[data-hero-canvas-wrap]')?.classList.add('webgl-failed');
    return () => {};
  }

  const parent = canvas.parentElement ?? document.body;
  const size = { w: parent.clientWidth || 1, h: parent.clientHeight || 1 };
  const dpr = () => Math.min(window.devicePixelRatio || 1, 2);

  renderer.setPixelRatio(dpr());
  renderer.setSize(size.w, size.h, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, size.w / size.h, 0.1, 100);
  camera.position.set(0, 0, 6.2);

  const world = new THREE.Group();
  scene.add(world);

  /* ---------------------------------------------------------- particles */
  // Fewer points on small screens / low-core devices.
  const isSmall = size.w < 720;
  const cores = navigator.hardwareConcurrency ?? 4;
  const COUNT = reduced ? 3500 : isSmall || cores <= 4 ? 7000 : 14000;
  const RADIUS = 1.65;

  const positions = new Float32Array(COUNT * 3);
  const randoms = new Float32Array(COUNT);
  const scales = new Float32Array(COUNT);

  // Fibonacci sphere → even coverage, no polar clumping.
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < COUNT; i++) {
    const y = 1 - (i / (COUNT - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    // Jitter the shell thickness so it reads volumetric.
    const shell = RADIUS * (0.82 + Math.random() * 0.26);
    positions[i * 3] = Math.cos(theta) * r * shell;
    positions[i * 3 + 1] = y * shell;
    positions[i * 3 + 2] = Math.sin(theta) * r * shell;
    randoms[i] = Math.random();
    scales[i] = 0.45 + Math.random() * Math.random() * 2.4;
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geo.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1));
  geo.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

  const initial = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const pal = PALETTES[initial];

  const uniforms = {
    uTime: { value: 0 },
    uSize: { value: isSmall ? 26 : 34 },
    uAmp: { value: 0.42 },
    uProgress: { value: 0 },
    uPixelRatio: { value: dpr() },
    uPointer: { value: new THREE.Vector2(0, 0) },
    uColorA: { value: pal.a.clone() },
    uColorB: { value: pal.b.clone() },
    uColorC: { value: pal.c.clone() },
    uOpacity: { value: SHELL_OPACITY[initial] },
  };

  const points = new THREE.Points(
    geo,
    new THREE.ShaderMaterial({
      vertexShader: VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
  );
  world.add(points);

  /* ------------------------------------------------------------ wireframe */
  const wireMat = new THREE.MeshBasicMaterial({
    color: pal.wire.clone(),
    wireframe: true,
    transparent: true,
    opacity: initial === 'dark' ? 0.11 : 0.16,
  });
  const wire = new THREE.Mesh(new THREE.IcosahedronGeometry(2.55, 1), wireMat);
  world.add(wire);

  /* ----------------------------------------------------------- dust ring */
  const RING = reduced ? 300 : 900;
  const ringPos = new Float32Array(RING * 3);
  for (let i = 0; i < RING; i++) {
    const a = Math.random() * Math.PI * 2;
    const rad = 2.9 + Math.random() * 1.5;
    ringPos[i * 3] = Math.cos(a) * rad;
    ringPos[i * 3 + 1] = (Math.random() - 0.5) * 0.45;
    ringPos[i * 3 + 2] = Math.sin(a) * rad;
  }
  const ringGeo = new THREE.BufferGeometry();
  ringGeo.setAttribute('position', new THREE.BufferAttribute(ringPos, 3));
  const ringMat = new THREE.PointsMaterial({
    size: 0.022,
    color: pal.b.clone(),
    transparent: true,
    opacity: initial === 'dark' ? 0.5 : 0.4,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });
  const ring = new THREE.Points(ringGeo, ringMat);
  ring.rotation.x = Math.PI * 0.32;
  world.add(ring);

  /* -------------------------------------------------------------- events */
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

  const onPointerMove = (e: PointerEvent) => {
    pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.ty = -((e.clientY / window.innerHeight) * 2 - 1);
  };
  window.addEventListener('pointermove', onPointerMove, { passive: true });

  const onResize = () => {
    const w = parent.clientWidth || 1;
    const h = parent.clientHeight || 1;
    if (w === size.w && h === size.h) return;
    size.w = w;
    size.h = h;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(dpr());
    renderer.setSize(w, h, false);
    uniforms.uPixelRatio.value = dpr();
    uniforms.uSize.value = w < 720 ? 26 : 34;
  };
  const ro = new ResizeObserver(onResize);
  ro.observe(parent);

  // Only render while the hero is on screen.
  let onScreen = true;
  const io = new IntersectionObserver(([entry]) => { onScreen = entry.isIntersecting; }, {
    threshold: 0,
  });
  io.observe(parent);

  let hidden = document.hidden;
  const onVisibility = () => { hidden = document.hidden; };
  document.addEventListener('visibilitychange', onVisibility);

  // Theme switch → tween the uniforms instead of rebuilding.
  const from: Palette = { a: pal.a.clone(), b: pal.b.clone(), c: pal.c.clone(), wire: pal.wire.clone() };
  let target = initial as 'dark' | 'light';
  let blend = 1;
  const onTheme = (e: Event) => {
    const next = (e as CustomEvent<{ theme: 'dark' | 'light' }>).detail?.theme;
    if (!next || next === target) return;
    from.a.copy(uniforms.uColorA.value);
    from.b.copy(uniforms.uColorB.value);
    from.c.copy(uniforms.uColorC.value);
    from.wire.copy(wireMat.color);
    target = next;
    blend = 0;
  };
  window.addEventListener('themechange', onTheme);

  /* ---------------------------------------------------------------- loop */
  const clock = new THREE.Clock();
  let raf = 0;
  let intro = 0;

  const tick = () => {
    raf = requestAnimationFrame(tick);
    if (hidden || !onScreen) return;

    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.getElapsedTime();

    // Intro easing (expo-out) — particles bloom outward on load.
    if (intro < 1) {
      intro = Math.min(1, intro + dt * (reduced ? 4 : 0.65));
      uniforms.uProgress.value = 1 - Math.pow(2, -10 * intro);
    }

    if (!reduced) {
      uniforms.uTime.value = t;

      pointer.x += (pointer.tx - pointer.x) * Math.min(1, dt * 3.2);
      pointer.y += (pointer.ty - pointer.y) * Math.min(1, dt * 3.2);
      uniforms.uPointer.value.set(pointer.x, pointer.y);

      world.rotation.y += dt * 0.075;
      world.rotation.x = pointer.y * 0.22;
      world.position.x = pointer.x * 0.28;

      wire.rotation.y -= dt * 0.11;
      wire.rotation.z += dt * 0.045;
      ring.rotation.z += dt * 0.06;

      camera.position.z = 6.2 + Math.sin(t * 0.4) * 0.14;
    } else {
      uniforms.uTime.value = 0;
    }

    if (blend < 1) {
      blend = Math.min(1, blend + dt * 1.6);
      const to = PALETTES[target];
      uniforms.uColorA.value.copy(from.a).lerp(to.a, blend);
      uniforms.uColorB.value.copy(from.b).lerp(to.b, blend);
      uniforms.uColorC.value.copy(from.c).lerp(to.c, blend);
      wireMat.color.copy(from.wire).lerp(to.wire, blend);
      ringMat.color.copy(uniforms.uColorB.value);
      uniforms.uOpacity.value = THREE.MathUtils.lerp(
        uniforms.uOpacity.value,
        SHELL_OPACITY[target],
        blend
      );
      wireMat.opacity = THREE.MathUtils.lerp(wireMat.opacity, target === 'dark' ? 0.11 : 0.16, blend);
      ringMat.opacity = THREE.MathUtils.lerp(ringMat.opacity, target === 'dark' ? 0.5 : 0.4, blend);
    }

    renderer.render(scene, camera);
  };
  tick();

  /* ------------------------------------------------------------- cleanup */
  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    window.removeEventListener('pointermove', onPointerMove);
    window.removeEventListener('themechange', onTheme);
    document.removeEventListener('visibilitychange', onVisibility);
    geo.dispose();
    ringGeo.dispose();
    (points.material as THREE.Material).dispose();
    ringMat.dispose();
    wireMat.dispose();
    wire.geometry.dispose();
    renderer.dispose();
  };
}
