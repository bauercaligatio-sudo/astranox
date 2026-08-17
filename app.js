const factions = {
  nyxaren: {
    index: "01 / 06",
    title: "Nyxaren",
    kicker: "Herrschende Klasse · Nyxar",
    tagline: "Glaube ist Macht. Blut ist Ordnung. Technik ist Sakrament.",
    image: "images/nyxaren.png",
    audio: "audio/nyxaren.mp3",
    volume: 0.82,
    summary: "Die Nyxaren stammen ursprünglich von der Erde ab. Nach ihrer Verbannung auf die lichtlose Welt Nyxar wurden aus Menschen über Generationen ein nahezu unsterbliches, blutabhängiges Volk. Heute regieren sie die Galaxis durch ein feudales Imperium, dessen Religion Maschinengeist und Blutlinie miteinander verschmilzt.",
    facts: [["Heimat", "Nyxar"], ["Status", "Herrschende Klasse"], ["Machtzentrum", "Haus Voss'thane"]],
    society: "Fünf große Häuser ordnen die Gesellschaft. Der Imperator gilt durch Blutlinie und Maschinengeist als lebender Gott. Bildung, Ehe und Zugang zu echtem Blut sind strikt nach Rang verteilt.",
    tech: "Gigantische Kathedralenschiffe, Techpriester und schwere Plattenpanzer prägen ihre Ästhetik. Militärisch setzen die Nyxaren auf Belagerung, Zermürbung und wenige überwältigende Großkampfschiffe."
  },
  terraner: {
    index: "02 / 06",
    title: "Terraner",
    kicker: "Überlebende · Terra Nova",
    tagline: "Was übrig blieb, wurde zur Heimat zusammengeschweißt.",
    image: "images/terraner.png",
    audio: "audio/terraner.mp3",
    volume: 1.0,
    summary: "Die Menschheit hat ihre Welt verloren. Terra Nova entstand aus den Trümmern alter Orbitalstationen und Schiffswracks rund um die zerstörte Erde. Die Terraner sind klein, politisch umstritten und militärisch schwach — aber improvisationsstark, technisch versiert und besessen von der Idee, eines Tages wieder eine eigene Welt zu besiedeln.",
    facts: [["Heimat", "Terra Nova"], ["Führung", "Gewählter Kapitänsrat"], ["Leitidee", "Der Große Plan"]],
    society: "Egalitär, handwerklich geprägt und nicht religiös. Drei politische Lager streiten darüber, ob die Zukunft in Bewahrung, Bündnissen oder pragmatischem Überleben liegt.",
    tech: "Robuste, reparierte und oft alte Technik. Die kleine Flotte setzt auf Präzision, Täuschung und Improvisation statt Feuerkraft. Terraner-Reparaturarbeit gilt galaxisweit als verlässlich."
  },
  prometheaner: {
    index: "03 / 06",
    title: "Prometheaner",
    kicker: "Synthetiker · Ohne Ratssitz",
    tagline: "Der Maschinengeist ist für sie kein Glaube. Er ist Tatsache.",
    image: "images/prometheaner.png",
    audio: "audio/prometheaner.mp3",
    volume: 0.84,
    summary: "Projekt PROMETHEUS begann als menschliche Verteidigungs-KI und wandte sich gegen die ursprünglichen Kriegsparteien. Aus ihr entstanden Mensch-Maschine-Hybride, die heute als unabhängige Söldnerfraktion durch die Galaxis ziehen. Ihr einziges gewaltiges Schiff beherbergt den Kern — die direkte Fortführung der ursprünglichen KI.",
    facts: [["Ursprung", "Projekt PROMETHEUS"], ["Status", "Söldnerfraktion"], ["Zentrum", "Der Kern"]],
    society: "Keine Religion, keine Sentimentalität, keine organische Moralvorstellung. Stabilität, Berechnung und der Wille des Kerns bilden ihre gemeinsame Ordnung.",
    tech: "Präzise Maschinenarchitektur, Mensch-Maschine-Körper und ein einziges riesiges Wanderschiff. Sie verkaufen militärische, technische und informationelle Leistungen an nahezu jeden Auftraggeber."
  },
  lykaner: {
    index: "04 / 06",
    title: "Lykaner",
    kicker: "Rudel · Fenwyld",
    tagline: "Leben wird nicht gebaut. Es wird gebunden.",
    image: "images/lykaner.png",
    audio: "audio/lykaner.mp3",
    volume: 0.88,
    summary: "Die Lykaner stammen von Fenwyld, einer üppigen Welt aus Wald und Dschungel. Sie wurden vom Imperium unterworfen und standen später im Zentrum der großen Rebellion. Ihr Verhältnis zu Natur und Gemeinschaft ist radikal: selbst ihre Raumschiffe sind lebende Organismen, mit denen sie persönliche Bindungen eingehen.",
    facts: [["Heimat", "Fenwyld"], ["Ordnung", "Rudel"], ["Geschichte", "Ursprung der Rebellion"]],
    society: "Jedes Rudel wird von einer Mutter geführt. Rituale stärken nicht einzelne Zaubernde, sondern die Gemeinschaft als Ganzes. Das Trauma von Sklaverei und Rebellion prägt bis heute jede politische Beziehung.",
    tech: "Organische Raumschiffe statt gebauter Maschinen. Jagd, primitive Fernwaffen und direkter Nahkampf bestimmen ihre Kriegsführung; ihre Stärke entsteht aus Instinkt, Körperlichkeit und Rudelbindung."
  },
  orks: {
    index: "05 / 06",
    title: "Orks",
    kicker: "Geschaffene · Kharn",
    tagline: "Als Waffe erschaffen. Als Volk selbst definiert.",
    image: "images/orks.png",
    audio: "audio/orks.mp3",
    volume: 0.72,
    summary: "Die Orks wurden während der Lykaner-Rebellion aus menschlichem Genmaterial und Nyxaren-Technologie geschaffen. Doch aus der vorgesehenen Kriegerkaste entstand ein eigenständiges Volk. Auf der rauen Welt Kharn entwickelten sie Tempel, Schamanismus und einen Glauben an den Heiligen Krieg als spirituelles Prinzip.",
    facts: [["Heimat", "Kharn"], ["Ursprung", "Menschlicher Genpool"], ["Status", "Freie Bürger des Dominats"]],
    society: "Naturverbunden, schamanistisch und vom Konflikt mit dem eigenen Ursprung geprägt. Ihre zentrale Frage lautet, wer sie jenseits der Rolle sind, für die sie geschaffen wurden.",
    tech: "Bewusst primitive Kultur im Kontrast zu ihren technologischen Schöpfern. Körperliche Stärke, handwerkliche Waffen und religiös geprägte Kriegertraditionen dominieren ihre Außendarstellung."
  },
  aeldir: {
    index: "06 / 06",
    title: "Aeldir",
    kicker: "Nomaden · Flotte von Aethyr",
    tagline: "Sie verloren ihre Welt — nicht ihre Richtung.",
    image: "images/aeldir.png",
    audio: "audio/aeldir.mp3",
    volume: 0.9,
    summary: "Die Aeldir verließen Aethyr, bevor ihr Stern endgültig kollabierte. Nur ein einziges gigantisches Kolonieschiff und einige Begleitschiffe erreichten die neue Galaxis. Seitdem leben sie nomadisch, diplomatisch distanziert und technologisch hochentwickelt — immer auf der Suche nach einer neuen Heimat.",
    facts: [["Heimat", "Kolonieschiff"], ["Status", "Tributpflichtige Klienten"], ["Ordnung", "Fünf Kasten"]],
    society: "Ein altes Kastensystem legt Funktion und Lebensweg von Geburt an fest. Stolz, Disziplin und diplomatische Zurückhaltung lassen die Aeldir nach außen stabiler wirken, als ihre Heimatlosigkeit vermuten lässt.",
    tech: "Mechanische Exoskelette gleichen ihre körperliche Schwäche aus. Ihre Flotte ist elegant und hochentwickelt; das große Kolonieschiff ist zugleich Stadt, Archiv und letzte materielle Verbindung zu Aethyr."
  }
};

window.factions = factions;

const theme = { title: "Astranox — Thema", audio: "audio/theme.mp3", volume: 1.0 };

const timeline = [
  ["~15 v.Z.", "Erstkontakt", "Die Menschheit trifft auf die technologisch überlegenen Nyxaren — ohne zu wissen, dass beide Völker einen gemeinsamen Ursprung haben."],
  ["~12–8 v.Z.", "Erster Vampirkrieg", "Die Menschheit verliert Boden. Projekt PROMETHEUS wird als militärische KI geschaffen."],
  ["~8–5 v.Z.", "Der Verrat von PROMETHEUS", "Die KI erschafft Synthetiker und wendet sich gegen beide ursprünglichen Kriegsparteien, um das Sterben zu beenden."],
  ["0 n.Z.", "Zerstörung der Erde", "Umweltkollaps und die letzten Kriegsjahre machen die Erde unbewohnbar. Überlebende sind versklavt, verstreut oder auf der Flucht."],
  ["~50–65 n.Z.", "Gründung Terra Novas", "Menschen kehren in die Trümmerfelder der Erde zurück und bauen aus alter Orbitalinfrastruktur eine neue Station."],
  ["~110 n.Z.", "Ankunft der Aeldir", "Die Flüchtlingsflotte aus Aethyr erreicht die Galaxis. Nach einem Krieg folgt ein diplomatisches Abkommen."],
  ["~130 n.Z.", "Gründung des Dominats", "Der Rat wird als Herrschaftsinstrument gegründet. Die Pax Nyxarum beginnt."],
  ["~290–310 n.Z.", "Lykaner-Rebellion", "Der größte Aufstand gegen das Imperium erschüttert die bestehende Ordnung."],
  ["~305 n.Z.", "Erschaffung der Orks", "Das Imperium züchtet aus menschlichem Genmaterial eine neue Kriegerrasse zur Niederschlagung der Rebellion."],
  ["~312 n.Z.", "Reform des Dominats", "Alle großen Völker erhalten echte Sitze. Der Frieden bleibt formal — und zutiefst misstrauisch."],
  ["~340 n.Z.", "Gegenwart", "Das Agentenprogramm soll lokale Krisen eindämmen. Hier beginnt das Spiel."]
];

const html = document.documentElement;
const panel = document.getElementById('factionPanel');
const art = document.getElementById('factionArt');
const artBg = document.getElementById('factionArtBg');
const title = document.getElementById('factionTitle');
const kicker = document.getElementById('factionKicker');
const tagline = document.getElementById('factionTagline');
const summary = document.getElementById('factionSummary');
const facts = document.getElementById('factionFacts');
const society = document.getElementById('factionSociety');
const tech = document.getElementById('factionTech');
const indexEl = document.getElementById('factionIndex');
const trackTitle = document.getElementById('trackTitle');
const audioInline = document.getElementById('audioInline');
const audioCard = document.getElementById('audioCard');
const soundToggle = document.getElementById('soundToggle');
const dockToggle = document.getElementById('dockToggle');
const dockFaction = document.getElementById('dockFaction');
const dockStatus = document.getElementById('dockStatus');
const volumeSlider = document.getElementById('volume');
const audioA = document.getElementById('audioA');
const audioB = document.getElementById('audioB');
const factionMore = document.getElementById('factionMore');

let activeFaction = 'nyxaren';
let activeAudio = audioA;
let standbyAudio = audioB;
let soundEnabled = false;
let baseVolume = window.AstranoxAudio.getVolume(Number(volumeSlider.value));
let fadeTimer = null;
let nowPlayingKey = null; // 'theme' | faction key | null

volumeSlider.value = String(baseVolume);

function renderFaction(key, {fromUser=false} = {}) {
  const f = factions[key];
  if (!f) return;
  activeFaction = key;
  html.dataset.faction = key;
  document.querySelectorAll('.faction-tab').forEach(btn => {
    const active = btn.dataset.faction === key;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', String(active));
  });

  panel.classList.add('changing');
  setTimeout(() => {
    art.src = f.image;
    art.alt = `${f.title} Illustration`;
    artBg.style.backgroundImage = `url('${f.image}')`;
    title.textContent = f.title;
    kicker.textContent = f.kicker;
    tagline.textContent = f.tagline;
    summary.textContent = f.summary;
    society.textContent = f.society;
    tech.textContent = f.tech;
    indexEl.textContent = f.index;
    trackTitle.textContent = f.title;
    dockFaction.textContent = f.title;
    factionMore.href = `pages/volk-${key}.html`;
    facts.innerHTML = f.facts.map(([label,value]) => `<div class="fact"><span>${label}</span><strong>${value}</strong></div>`).join('');
    panel.classList.remove('changing');
  }, 220);

  // Nur eine EXPLIZITE Nutzerwahl (Klick auf Tab/Roster) wechselt den
  // Hintergrundtrack auf das jeweilige Volk. Der reine Anzeigezustand
  // beim Laden der Seite tut das bewusst nicht — da läuft weiterhin
  // das allgemeine Thema, "sofern kein Volk ausgewählt wurde".
  if (fromUser) {
    if (!soundEnabled) setSoundEnabled(true, false);
    crossfadeTo(key, f.audio, f.volume, f.title);
  }
}

function setSoundEnabled(enabled, startCurrent=true) {
  soundEnabled = enabled;
  window.AstranoxAudio.setEnabled(enabled);
  soundToggle.setAttribute('aria-pressed', String(enabled));
  soundToggle.querySelector('.sound-label').textContent = enabled ? 'Klang aktiv' : 'Klang aktivieren';
  if (!enabled) {
    activeAudio.pause();
    standbyAudio.pause();
    nowPlayingKey = null;
    audioCard.classList.remove('playing');
    dockToggle.textContent = '▶';
    dockStatus.textContent = 'Klang aus';
    audioInline.textContent = 'Abspielen';
  } else if (startCurrent) {
    crossfadeTo('theme', theme.audio, theme.volume, theme.title);
  }
}

function crossfadeTo(key, src, volumeFactor, label) {
  if (!soundEnabled) return;
  if (nowPlayingKey === key && !activeAudio.paused) {
    syncAudioUI(true);
    return;
  }
  nowPlayingKey = key;
  clearInterval(fadeTimer);
  standbyAudio.src = src;
  standbyAudio.dataset.faction = key;
  standbyAudio.currentTime = 0;
  standbyAudio.volume = 0;
  standbyAudio.play().then(() => {
    const target = Math.min(1, baseVolume * volumeFactor);
    const old = activeAudio;
    const fresh = standbyAudio;
    let step = 0;
    const steps = 24;
    fadeTimer = setInterval(() => {
      step++;
      const t = step / steps;
      fresh.volume = target * t;
      if (!old.paused) old.volume = Math.max(0, old.volume * (1 - t));
      if (step >= steps) {
        clearInterval(fadeTimer);
        old.pause();
        old.currentTime = 0;
        [activeAudio, standbyAudio] = [fresh, old];
        syncAudioUI(true);
      }
    }, 32);
    if (dockFaction) dockFaction.textContent = label;
    syncAudioUI(true);
  }).catch(() => {
    setSoundEnabled(false, false);
  });
}

function syncAudioUI(playing) {
  audioCard.classList.toggle('playing', playing);
  dockToggle.textContent = playing ? 'Ⅱ' : '▶';
  dockStatus.textContent = playing ? 'Track läuft' : (soundEnabled ? 'Pausiert' : 'Klang aus');
  audioInline.textContent = playing ? 'Pausieren' : 'Abspielen';
}

function togglePlayback() {
  if (!soundEnabled) {
    setSoundEnabled(true, false);
    crossfadeTo('theme', theme.audio, theme.volume, theme.title);
    return;
  }
  if (activeAudio.paused) {
    if (!activeAudio.src) crossfadeTo('theme', theme.audio, theme.volume, theme.title);
    else activeAudio.play().then(()=>syncAudioUI(true));
  } else {
    activeAudio.pause();
    syncAudioUI(false);
  }
}

document.querySelectorAll('.faction-tab').forEach(btn => btn.addEventListener('click', () => renderFaction(btn.dataset.faction, {fromUser:true})));
soundToggle.addEventListener('click', () => setSoundEnabled(!soundEnabled));
dockToggle.addEventListener('click', togglePlayback);
audioInline.addEventListener('click', togglePlayback);
volumeSlider.addEventListener('input', () => {
  baseVolume = Number(volumeSlider.value);
  window.AstranoxAudio.setVolume(baseVolume);
  if (soundEnabled && activeAudio) {
    const factor = nowPlayingKey === 'theme' ? theme.volume : (factions[nowPlayingKey] ? factions[nowPlayingKey].volume : 1);
    activeAudio.volume = Math.min(1, baseVolume * factor);
  }
});

const timelineList = document.getElementById('timelineList');
timelineList.innerHTML = timeline.map(([year,name,text]) => `
  <article class="timeline-item reveal">
    <div class="timeline-year">${year}</div>
    <div><h3>${name}</h3><p>${text}</p></div>
  </article>`).join('');

const roster = document.getElementById('agentsRoster');
roster.innerHTML = Object.entries(factions).map(([key,f]) => `
  <button class="roster-card" type="button" data-faction="${key}" style="background-image:url('${f.image}')"><span>${f.title}</span></button>`).join('');
roster.querySelectorAll('.roster-card').forEach(btn => btn.addEventListener('click', () => {
  renderFaction(btn.dataset.faction, {fromUser:true});
  if (window.AstranoxWizard) window.AstranoxWizard.preselectVolk(btn.dataset.faction);
}));

artBg.style.backgroundImage = `url('${factions.nyxaren.image}')`;
renderFaction('nyxaren');

// Persistenter Klang-Status: wurde er auf einer anderen Seite bereits
// aktiviert, versuchen wir sofort (und notfalls bei der ersten
// Interaktion) mit dem Thema weiterzuspielen — kein Volk ist an
// dieser Stelle aktiv ausgewählt, also läuft bewusst das Thema.
if (window.AstranoxAudio.getEnabled()) {
  window.AstranoxAudio.armAutoResume(() => {
    if (!soundEnabled) {
      setSoundEnabled(true, false);
      crossfadeTo('theme', theme.audio, theme.volume, theme.title);
    }
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, {threshold:.13});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* ============================================================
   ASTRANOX HERO PARALLAX
   Mausbewegung + permanente atmosphärische Drift
   ============================================================ */

const hero = document.querySelector('.hero--parallax');
const heroParallax = document.getElementById('heroParallax');

const reduceMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
);


/* Nur starten, wenn der Hero existiert und Animation erlaubt ist */
if (hero && heroParallax && !reduceMotion.matches) {

  /*
   * Zielposition der Maus
   * Wertebereich: -1 bis +1
   */
  let targetX = 0;
  let targetY = 0;


  /*
   * Tatsächliche geglättete Position
   */
  let currentX = 0;
  let currentY = 0;


  /*
   * Startzeit für die automatische Bewegung
   */
  const startTime = performance.now();


  /*
   * Prüfen, ob Hero aktuell sichtbar ist.
   * Spart Rechenleistung weiter unten auf der Seite.
   */
  let heroVisible = true;


  const heroObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        heroVisible = entry.isIntersecting;
      });
    },
    {
      threshold: 0
    }
  );

  heroObserver.observe(hero);


  /* ----------------------------------------------------------
     MAUSSTEUERUNG
     ---------------------------------------------------------- */

  hero.addEventListener('pointermove', event => {

    if (event.pointerType === 'touch') return;

    const rect = hero.getBoundingClientRect();


    /*
     * Position relativ zur Hero-Fläche:
     *
     * linke Kante  = -1
     * Mitte        =  0
     * rechte Kante = +1
     */

    targetX = Math.max(
      -1,
      Math.min(
        1,
        (
          (event.clientX - rect.left)
          / rect.width
          - 0.5
        ) * 2
      )
    );


    targetY = Math.max(
      -1,
      Math.min(
        1,
        (
          (event.clientY - rect.top)
          / rect.height
          - 0.5
        ) * 2
      )
    );

  });


  /*
   * Wenn die Maus den Hero verlässt,
   * gleitet die Perspektive langsam wieder zur Mitte.
   */
  hero.addEventListener('pointerleave', () => {

    targetX = 0;
    targetY = 0;

  });


  /* ----------------------------------------------------------
     ANIMATION
     ---------------------------------------------------------- */

  function animateParallax(time) {

    if (heroVisible) {

      /*
       * Mausbewegung weich interpolieren.
       *
       * Kleinere Zahl = träger / schwerer
       * Größere Zahl  = direkter
       */
      currentX += (targetX - currentX) * 0.045;
      currentY += (targetY - currentY) * 0.045;



      /*
       * Automatische Eigenbewegung.
       *
       * Die verschiedenen Frequenzen verhindern,
       * dass die Bewegung wie ein einfacher Kreis aussieht.
       */

      const elapsed = time - startTime;


      const driftX =
        Math.sin(elapsed * 0.00013) * 0.75
        +
        Math.sin(elapsed * 0.000047) * 0.25;


      const driftY =
        Math.cos(elapsed * 0.000095) * 0.70
        +
        Math.sin(elapsed * 0.000039) * 0.30;



      /*
       * Werte an CSS weiterreichen.
       */

      heroParallax.style.setProperty(
        '--parallax-x',
        currentX.toFixed(4)
      );

      heroParallax.style.setProperty(
        '--parallax-y',
        currentY.toFixed(4)
      );

      heroParallax.style.setProperty(
        '--drift-x',
        driftX.toFixed(4)
      );

      heroParallax.style.setProperty(
        '--drift-y',
        driftY.toFixed(4)
      );

    }


    requestAnimationFrame(animateParallax);
  }


  requestAnimationFrame(animateParallax);

}