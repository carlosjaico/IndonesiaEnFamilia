const app = document.getElementById("app");

// ---------- Pixel art ----------
const VOLCANO_SVG = `
<svg class="logo" id="logo" viewBox="0 0 16 16" shape-rendering="crispEdges" role="img" aria-label="Volcán">
  <rect x="0" y="0" width="16" height="16" fill="#8fd3ff"/>
  <rect x="11" y="2" width="3" height="3" fill="#ffd23f"/>
  <rect x="7" y="2" width="2" height="1" fill="#ff6b35"/>
  <rect x="6" y="3" width="1" height="1" fill="#ff6b35"/>
  <rect x="9" y="3" width="1" height="1" fill="#ff6b35"/>
  <rect x="6" y="5" width="4" height="1" fill="#6b4f3a"/>
  <rect x="5" y="6" width="6" height="1" fill="#6b4f3a"/>
  <rect x="7" y="5" width="2" height="1" fill="#ff6b35"/>
  <rect x="4" y="7" width="8" height="1" fill="#6b4f3a"/>
  <rect x="3" y="8" width="10" height="1" fill="#6b4f3a"/>
  <rect x="2" y="9" width="12" height="1" fill="#6b4f3a"/>
  <rect x="1" y="10" width="14" height="1" fill="#6b4f3a"/>
  <rect x="0" y="11" width="16" height="2" fill="#3cb043"/>
  <rect x="0" y="13" width="16" height="3" fill="#2d7ff9"/>
  <rect x="2" y="14" width="3" height="1" fill="#8fd3ff"/>
  <rect x="9" y="14" width="4" height="1" fill="#8fd3ff"/>
</svg>`;

// ---------- Helpers ----------
const plural = (n, s, p) => `${n} ${n === 1 ? s : p}`;

function paradas(plan) {
  return plan.etapas
    .filter((e) => e.tipo === "destino")
    .map((e) => {
      const d = DESTINOS[e.destino];
      return `${d.emoji} ${d.nombre}`;
    });
}

function fotoHTML(f, emoji) {
  if (f.src) {
    const credito = f.autor
      ? `<a class="credit" href="${f.fuente}" target="_blank" rel="noopener">© ${f.autor} · ${f.licencia}</a>`
      : "";
    return `<div class="photo"><img src="${f.src}" alt="${f.alt}" loading="lazy">${credito}</div>`;
  }
  return `<div class="photo empty"><span>${emoji}</span>${f.alt}</div>`;
}

// ---------- Views ----------
function renderHome() {
  document.title = VIAJE.titulo;
  app.innerHTML = `
    <header class="hero">
      ${VOLCANO_SVG}
      <h1>${VIAJE.titulo}</h1>
      <p class="sub">${VIAJE.subtitulo}</p>
      <p>${VIAJE.intro}</p>
    </header>

    <div class="section-title"><i class="arrow"></i>ELIGE TU MUNDO</div>
    <nav class="plans">
      ${PLANES.map(
        (p) => `
        <a class="plan-card px ${p.color}" href="#/plan/${p.id}">
          <span class="tag ${p.color}">MUNDO ${p.mundo}</span>
          <h2>${p.nombre}</h2>
          <p>${p.lema}</p>
          <div class="stops">${paradas(p).join(" → ")}</div>
          <span class="go">PULSA START<i class="arrow"></i></span>
        </a>`
      ).join("")}
    </nav>

    <footer>${VIAJE.resumen}</footer>
  `;
  setupLogoEgg();
}

function renderPlan(id) {
  const plan = PLANES.find((p) => p.id === id);
  if (!plan) return renderHome();
  document.title = `${plan.nombre} · ${VIAJE.titulo}`;

  const etapas = plan.etapas
    .map((e) => {
      if (e.tipo === "warp") {
        return `
        <div class="stop warp-stop">
          <div class="warp">
            <div class="label">${e.texto}<br><span class="dur">⏱ ${e.duracion}</span></div>
          </div>
        </div>`;
      }
      const d = DESTINOS[e.destino];
      const dias = e.excursion ? "EXCURSION" : `DIAS ${e.dias}`;
      const noches = e.noches ? `<span class="tag ghost">${plural(e.noches, "NOCHE", "NOCHES")}</span>` : "";
      return `
        <div class="stop">
          <article class="dest px">
            <div class="meta">
              <span class="tag">${dias}</span>
              ${noches}
            </div>
            <h2>${d.emoji} ${d.nombre}</h2>
            <p class="intro">${d.intro}</p>
            ${e.nota ? `<p class="note">${e.nota}</p>` : ""}
            <h3>★ QUE HACER</h3>
            <ul>${d.puntos.map((t) => `<li>${t}</li>`).join("")}</ul>
            <div class="photos">${d.fotos.map((f) => fotoHTML(f, d.emoji)).join("")}</div>
          </article>
        </div>`;
    })
    .join("");

  const otros = PLANES.filter((p) => p.id !== plan.id);

  app.innerHTML = `
    <a class="back px" href="#/"><i class="arrow left"></i>PORTADA</a>

    <header class="plan-head">
      <span class="tag ${plan.color}">MUNDO ${plan.mundo}</span>
      <h1>${plan.nombre}</h1>
      <p>${plan.lema}</p>
      <div class="chips">${paradas(plan).map((s) => `<span class="chip">${s}</span>`).join("")}</div>
    </header>

    <section class="timeline" style="--plan: var(--${plan.color})">
      <div class="stop endpoint"><div class="warp"><div class="label">✈️ Aterrizaje en Bali (DPS)</div></div></div>
      ${etapas}
      <div class="stop endpoint"><div class="warp"><div class="label">🏁 Vuelo de vuelta a casa</div></div></div>
    </section>

    <div class="section-title"><i class="arrow"></i>OTROS MUNDOS</div>
    <nav class="other">
      ${otros.map((p) => `<a class="px" href="#/plan/${p.id}"><span class="tag ${p.color}">MUNDO ${p.mundo}</span> ${p.nombre}</a>`).join("")}
    </nav>

    <a class="back bottom px" href="#/"><i class="arrow left"></i>PORTADA</a>
  `;
}

// ---------- Router ----------
function route() {
  const m = location.hash.match(/^#\/plan\/(\w+)/);
  clearDiegoTrap();
  m ? renderPlan(m[1]) : renderHome();
  window.scrollTo(0, 0);
  if (m) setTimeout(setupDiegoTrap, 300);
}
window.addEventListener("hashchange", route);

// ---------- Easter eggs ----------
let audioCtx;
function coin() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const t = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(988, t);
    osc.frequency.setValueAtTime(1319, t + 0.08);
    gain.gain.setValueAtTime(0.08, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
    osc.connect(gain).connect(audioCtx.destination);
    osc.start(t);
    osc.stop(t + 0.45);
  } catch (e) { /* sin sonido, no pasa nada */ }
}

function monkeyRun(text = "1UP!") {
  const egg = document.getElementById("egg");
  const runner = document.createElement("div");
  runner.className = "runner flip";
  runner.textContent = "🐒";
  const up = document.createElement("div");
  up.className = "oneup";
  up.textContent = text;
  egg.append(runner, up);
  coin();
  setTimeout(() => { runner.remove(); up.remove(); }, 2700);
}

// 1) Toca el volcán 5 veces
function setupLogoEgg() {
  const logo = document.getElementById("logo");
  if (!logo) return;
  let taps = 0, timer;
  logo.addEventListener("click", () => {
    taps++;
    clearTimeout(timer);
    timer = setTimeout(() => (taps = 0), 1200);
    if (taps >= 5) { taps = 0; monkeyRun("¡MONO SALVAJE!"); }
  });
}

// 2) Trampa para Diego: en un mundo, a mitad de scroll aleatoria, se bloquea el scroll
//    y aparece "DIEGO NO PULSES AQUI" durante 5 s. Si lo pulsa → OIIA cat.
const OIIA_GIF = "https://media.giphy.com/media/ztisqLhP99tVSHG136/giphy.webp";
const OIIA_MP3 = "https://www.myinstants.com/media/sounds/oiiaioiiiai-cat.mp3";
const OIIA_SPEED = 1.5;
const OIIA_LOOPS = 2;
const TRAP_SECONDS = 5;

let trap = null;

function blockScroll(e) { e.preventDefault(); }
function lockScroll(on) {
  document.documentElement.classList.toggle("locked", on);
  const opts = { passive: false };
  if (on) {
    window.addEventListener("touchmove", blockScroll, opts);
    window.addEventListener("wheel", blockScroll, opts);
  } else {
    window.removeEventListener("touchmove", blockScroll, opts);
    window.removeEventListener("wheel", blockScroll, opts);
  }
}

function setupDiegoTrap() {
  clearDiegoTrap();
  const max = document.documentElement.scrollHeight - window.innerHeight;
  if (max < 600) return;
  // punto aleatorio entre el 20% y el 70% de la página
  const at = max * (0.2 + Math.random() * 0.5);
  const onScroll = () => {
    if (window.scrollY < at) return;
    window.removeEventListener("scroll", onScroll);
    showTrap();
  };
  trap = { onScroll };
  window.addEventListener("scroll", onScroll, { passive: true });
}

function clearDiegoTrap() {
  if (!trap) return;
  window.removeEventListener("scroll", trap.onScroll);
  clearTimeout(trap.timer);
  document.querySelector(".trap")?.remove();
  lockScroll(false);
  trap = null;
}

function showTrap() {
  lockScroll(true);
  const box = document.createElement("div");
  box.className = "trap";
  box.innerHTML = `
    <button class="trap-btn px" type="button">
      DIEGO<br>NO PULSES<br>AQUI
      <span class="trap-bar" style="animation-duration:${TRAP_SECONDS}s"></span>
    </button>`;
  document.body.append(box);
  box.querySelector(".trap-btn").addEventListener("click", () => {
    clearTimeout(trap.timer);
    box.remove();
    showOiia();
  });
  trap.timer = setTimeout(() => {
    box.remove();
    lockScroll(false);
  }, TRAP_SECONDS * 1000);
}

function showOiia() {
  const box = document.createElement("div");
  box.className = "oiia";
  box.innerHTML = `<img src="${OIIA_GIF}" alt="OIIA cat">`;
  document.body.append(box);

  // Se crea dentro del toque para que iOS deje sonar el audio
  const audio = new Audio(OIIA_MP3);
  audio.playbackRate = OIIA_SPEED;
  audio.preservesPitch = false;
  audio.webkitPreservesPitch = false;
  let loops = 1;
  const close = () => {
    audio.pause();
    box.remove();
    lockScroll(false);
  };
  audio.addEventListener("ended", () => {
    if (loops++ < OIIA_LOOPS) {
      audio.currentTime = 0;
      audio.play().catch(close);
    } else close();
  });
  box.addEventListener("click", close);
  audio.play().catch(() => setTimeout(close, 3000));
}

// 3) Código Konami en teclado: ↑↑↓↓←→←→BA
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let kpos = 0;
window.addEventListener("keydown", (e) => {
  kpos = e.key.toLowerCase() === KONAMI[kpos].toLowerCase() ? kpos + 1 : (e.key === "ArrowUp" ? 1 : 0);
  if (kpos === KONAMI.length) { kpos = 0; monkeyRun("+30 VIDAS"); }
});

// ---------- Arranque ----------
route();
