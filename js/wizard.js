/* ============================================================
   Astranox — Charakter-Editor
   Nutzt die "factions"-Objekte aus app.js (muss vorher geladen
   sein) für Bilder/Titel und ergänzt eigene Erschaffungsdaten.
   ============================================================ */

(function () {
  "use strict";

  var STEP_LABELS = ["Volk", "Unterfraktion", "Attribute", "Fertigkeiten", "Fähigkeit", "Abschluss"];

  var ATTRIBUTES = [
    { id: "koerper", name: "Körper" },
    { id: "geschick", name: "Geschick" },
    { id: "verstand", name: "Verstand" },
    { id: "wille", name: "Wille" },
    { id: "praesenz", name: "Präsenz" }
  ];

  var SKILLS = [
    { id: "nahkampf", name: "Nahkampf", attr: "koerper" },
    { id: "athletik", name: "Athletik", attr: "koerper" },
    { id: "widerstand", name: "Widerstand", attr: "koerper" },
    { id: "fernkampf", name: "Fernkampf", attr: "geschick" },
    { id: "heimlichkeit", name: "Heimlichkeit", attr: "geschick" },
    { id: "fingerfertigkeit", name: "Fingerfertigkeit", attr: "geschick" },
    { id: "pilotieren", name: "Pilotieren", attr: "geschick" },
    { id: "wissen", name: "Wissen", attr: "verstand" },
    { id: "technik", name: "Technik", attr: "verstand" },
    { id: "medizin", name: "Medizin", attr: "verstand" },
    { id: "wahrnehmung", name: "Wahrnehmung", attr: "verstand" },
    { id: "disziplin", name: "Disziplin", attr: "wille" },
    { id: "okkultismus", name: "Okkultismus & Ritual", attr: "wille" },
    { id: "ueberzeugung", name: "Überzeugung", attr: "praesenz" },
    { id: "einschuechterung", name: "Einschüchterung", attr: "praesenz" },
    { id: "taeuschung", name: "Täuschung", attr: "praesenz" }
  ];

  var CREATION = { attrStart: 2, attrPool: 7, attrCap: 4, skillPool: 24, skillCap: 3 };

  var SUBFACTIONS = {
    nyxaren: {
      label: "Haus",
      items: [
        { id: "vossthane", name: "Voss'thane", desc: "Das Kaiserhaus — Vereinigung aller vier Domänen.", abilities: ["Blutrecht des Throns — einmal pro Sitzung eine Order erteilen, der niedere Diener nicht widersprechen können.", "Erstes Blut — Wunden heilen im Ruhezustand geringfügig schneller."] },
        { id: "amaris", name: "Amaris", desc: "Kinder des Mondes — Flotten und Eroberung.", abilities: ["Flottentaktik — Bonus auf Manöver in Raumgefechten.", "Kalte Entschlossenheit — Resistenz gegen Einschüchterung im Kampf."] },
        { id: "morana", name: "Morana", desc: "Kinder des Todes — Blut und Urteil.", abilities: ["Blutgespür — echtes Blut in der Nähe erkennen.", "Scharfrichterblick — Bonus bei der Einschätzung von Schwäche eines Gegners."] },
        { id: "lucius", name: "Lucius", desc: "Kinder des Lichts — Wissen, Lehre, Diplomatie.", abilities: ["Lehrmeisterwissen — Bonus auf Wissen bei religiösen/historischen Fragen.", "Silberzunge des Hofes — Bonus auf Überzeugung gegenüber Adel."] },
        { id: "lilith", name: "Lilith", desc: "Kinder der Nacht — Schatten und Geheimdienst.", abilities: ["Schattenpfad — Bonus auf Heimlichkeit in Innenräumen.", "Ohren an der Wand — erfährt früher von Gerüchten/Intrigen am Ort."] }
      ]
    },
    terraner: {
      label: "Fraktion",
      items: [
        { id: "ankerwacht", name: "Ankerwacht", desc: "Bewahrt die Station, misstrauisch gegenüber dem Dominat.", abilities: ["Wachsamer Blick — Bonus auf Wahrnehmung bei Bedrohungen.", "Alte Disziplin — Resistenz gegen Täuschung."] },
        { id: "steuerleute", name: "Steuerleute", desc: "Die politische Stimme der Terraner im Dominat.", abilities: ["Verhandlungsgeschick — Bonus auf Überzeugung im diplomatischen Kontext.", "Legitimitätsanspruch — kann sich einmal pro Sitzung glaubhaft als offizieller Vertreter ausweisen."] },
        { id: "lotsen", name: "Lotsen", desc: "Reisen zwischen den verstreuten Menschen.", abilities: ["Ortskenntnis der Diaspora — kennt eher Kontakte unter verstreuten Menschen.", "Improvisationstalent — Bonus auf Technik bei behelfsmäßigen Reparaturen."] }
      ]
    },
    lykaner: {
      label: "Rolle",
      items: [
        { id: "krieger", name: "Krieger", desc: "Verteidiger des Rudels, ausgebildet an Speer, Bogen und Kralle.", abilities: ["Rudeltaktik — Bonus im Kampf, wenn mit anderen Lykanern gemeinsam gekämpft wird.", "Zähigkeit Fenwylds — erhöhte Widerstandsfähigkeit gegen Gift und Krankheit."] },
        { id: "schamane", name: "Schamane", desc: "Wandelt auf dem Pfad zur Priesterschaft.", abilities: ["Ritualgesang — Bonus auf Okkultismus bei gemeinschaftlichen Ritualen.", "Blick durch den Wald — Wahrnehmung nutzbar, um Wettereinflüsse vorherzusehen."] },
        { id: "jaeger", name: "Jäger & Sammler", desc: "Kennt Fenwyld wie kein anderer.", abilities: ["Fährtenleser — Bonus auf Wahrnehmung im Gelände.", "Ein mit dem Dschungel — Bonus auf Heimlichkeit in Wäldern/Dschungeln."] },
        { id: "handwerker", name: "Handwerker", desc: "Baut Werkzeug, Waffen, pflegt die Bindung zu den lebenden Schiffen.", abilities: ["Schiffsbindung — Bonus auf Technik im Umgang mit lebenden Schiffen.", "Geschickte Hand — Bonus auf Fingerfertigkeit bei traditioneller Handwerkskunst."] }
      ]
    },
    aeldir: {
      label: "Kaste",
      items: [
        { id: "gelehrte", name: "Gelehrte", desc: "🔶 Bewahren Wissen und Erinnerung an Aethyr.", abilities: ["🔶 Archiv des Verlusts — Bonus auf Wissen zu vergangenen Ereignissen.", "🔶 Klarer Geist — Bonus auf Disziplin gegen Verwirrung/Täuschung."] },
        { id: "krieger", name: "Krieger", desc: "🔶 Verteidigen die Schiffsverbände mit kühler Präzision.", abilities: ["🔶 Erhabene Klinge — Bonus auf Nahkampf mit traditionellen Waffen.", "🔶 Unbewegt — Resistenz gegen Einschüchterung."] },
        { id: "handwerker", name: "Handwerker", desc: "🔶 Erhalten die Schiffsverbände und ihre Technologie.", abilities: ["🔶 Präzisionsarbeit — Bonus auf Technik bei filigranen Reparaturen."] },
        { id: "sprecher", name: "Sprecher", desc: "🔶 Diplomaten, vertreten die Aeldir nach außen.", abilities: ["🔶 Distanzierte Würde — Bonus auf Überzeugung gegenüber anderen Völkern."] },
        { id: "dienende", name: "Dienende", desc: "🔶 Halten die Schiffsverbände im Alltag am Laufen.", abilities: ["🔶 Stille Effizienz — Bonus auf Fingerfertigkeit bei alltäglichen Aufgaben."] }
      ]
    },
    orks: null,
    prometheaner: null
  };

  var state = { volkId: null, subId: null, ability: null, attrs: {}, skills: {}, name: "", background: "" };
  var current = 0;

  function volkList() { return Object.keys(window.factions || {}); }
  function volkData(key) { return window.factions[key]; }
  function subData(key) { return SUBFACTIONS[key]; }
  function hasSub(key) { var s = subData(key); return !!(s && s.items && s.items.length); }

  function visibleSteps() {
    var steps = [0, 1, 2, 3, 4, 5];
    if (!state.volkId || !hasSub(state.volkId)) steps = steps.filter(function (s) { return s !== 1 && s !== 4; });
    return steps;
  }

  function ensureDefaults() {
    ATTRIBUTES.forEach(function (a) { if (state.attrs[a.id] === undefined) state.attrs[a.id] = CREATION.attrStart; });
    SKILLS.forEach(function (s) { if (state.skills[s.id] === undefined) state.skills[s.id] = 0; });
  }

  function renderStepsBar() {
    var el = document.getElementById("wizardSteps");
    var vis = visibleSteps();
    el.innerHTML = STEP_LABELS.map(function (label, i) {
      if (vis.indexOf(i) === -1) return "";
      var cls = i === current ? "is-active" : (vis.indexOf(i) < vis.indexOf(current) ? "is-done" : "");
      return '<span class="' + cls + '">' + label + "</span>";
    }).join("");
  }

  function renderVolkPicks() {
    var el = document.getElementById("wizPickVolk");
    el.innerHTML = volkList().map(function (key) {
      var f = volkData(key);
      var sel = state.volkId === key ? "is-selected" : "";
      return '<button type="button" class="wizard-pick-card ' + sel + '" data-volk="' + key + '" style="background-image:url(\'' + f.image + '\')"><span>' + f.title + "</span></button>";
    }).join("");
    el.querySelectorAll("[data-volk]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var v = btn.dataset.volk;
        if (v !== state.volkId) { state.volkId = v; state.subId = null; state.ability = null; }
        renderVolkPicks(); renderSubPicks(); renderAbilities(); renderStepsBar();
      });
    });
  }

  function renderSubPicks() {
    var wrap = document.getElementById("wizPickSub");
    var note = document.getElementById("wizNoSub");
    var titleEl = document.getElementById("wizSubTitle");
    if (!state.volkId || !hasSub(state.volkId)) { wrap.innerHTML = ""; note.hidden = false; return; }
    note.hidden = true;
    var s = subData(state.volkId);
    titleEl.textContent = s.label + " wählen";
    wrap.innerHTML = s.items.map(function (it) {
      var sel = state.subId === it.id ? "is-selected" : "";
      return '<button type="button" class="wizard-sub-card ' + sel + '" data-sub="' + it.id + '"><h4>' + it.name + "</h4><p>" + it.desc + "</p></button>";
    }).join("");
    wrap.querySelectorAll("[data-sub]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.subId = btn.dataset.sub; state.ability = null;
        renderSubPicks(); renderAbilities();
      });
    });
  }

  function renderAbilities() {
    var wrap = document.getElementById("wizAbilities");
    var note = document.getElementById("wizNoAbility");
    var s = state.volkId ? subData(state.volkId) : null;
    var item = s && s.items.find(function (i) { return i.id === state.subId; });
    if (!item) { wrap.innerHTML = ""; note.hidden = false; return; }
    note.hidden = true;
    wrap.innerHTML = item.abilities.map(function (a, i) {
      var sel = state.ability === a ? "is-selected" : "";
      return '<button type="button" class="wizard-ability-card ' + sel + '" data-i="' + i + '">' + a + "</button>";
    }).join("");
    wrap.querySelectorAll("[data-i]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        state.ability = item.abilities[Number(btn.dataset.i)];
        renderAbilities();
      });
    });
  }

  function attrSpent() { var s = 0; ATTRIBUTES.forEach(function (a) { s += state.attrs[a.id] - CREATION.attrStart; }); return s; }
  function skillSpent() { var s = 0; SKILLS.forEach(function (sk) { s += state.skills[sk.id]; }); return s; }

  function renderAttrRows() {
    ensureDefaults();
    var wrap = document.getElementById("wizAttrRows");
    wrap.innerHTML = ATTRIBUTES.map(function (a) {
      return '<div class="wizard-attr-row"><span class="name">' + a.name + '</span><div class="wizard-stepper">' +
        '<button type="button" data-dec="' + a.id + '">\u2212</button><span class="val" id="av-' + a.id + '">' + state.attrs[a.id] + '</span>' +
        '<button type="button" data-inc="' + a.id + '">+</button></div></div>';
    }).join("");
    wrap.querySelectorAll("[data-inc]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.dataset.inc;
        if (state.attrs[id] < CREATION.attrCap && attrSpent() < CREATION.attrPool) { state.attrs[id]++; updateAttrUI(); }
      });
    });
    wrap.querySelectorAll("[data-dec]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.dataset.dec;
        if (state.attrs[id] > CREATION.attrStart) { state.attrs[id]--; updateAttrUI(); }
      });
    });
    updateAttrUI();
  }
  function updateAttrUI() {
    ATTRIBUTES.forEach(function (a) { document.getElementById("av-" + a.id).textContent = state.attrs[a.id]; });
    var remaining = CREATION.attrPool - attrSpent();
    var b = document.getElementById("wizAttrBudget");
    b.textContent = "Punkte übrig: " + remaining + " / " + CREATION.attrPool;
    b.classList.toggle("is-over", remaining < 0);
  }

  function renderSkillRows() {
    ensureDefaults();
    var attrName = {}; ATTRIBUTES.forEach(function (a) { attrName[a.id] = a.name; });
    var wrap = document.getElementById("wizSkillRows");
    wrap.innerHTML = SKILLS.map(function (s) {
      return '<div class="wizard-skill-row"><span class="name">' + s.name + '<span class="lead">' + attrName[s.attr] + '</span></span><div class="wizard-stepper">' +
        '<button type="button" data-dec="' + s.id + '">\u2212</button><span class="val" id="sv-' + s.id + '">' + state.skills[s.id] + '</span>' +
        '<button type="button" data-inc="' + s.id + '">+</button></div></div>';
    }).join("");
    wrap.querySelectorAll("[data-inc]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.dataset.inc;
        if (state.skills[id] < CREATION.skillCap && skillSpent() < CREATION.skillPool) { state.skills[id]++; updateSkillUI(); }
      });
    });
    wrap.querySelectorAll("[data-dec]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.dataset.dec;
        if (state.skills[id] > 0) { state.skills[id]--; updateSkillUI(); }
      });
    });
    updateSkillUI();
  }
  function updateSkillUI() {
    SKILLS.forEach(function (s) { document.getElementById("sv-" + s.id).textContent = state.skills[s.id]; });
    var remaining = CREATION.skillPool - skillSpent();
    var b = document.getElementById("wizSkillBudget");
    b.textContent = "Punkte übrig: " + remaining + " / " + CREATION.skillPool;
    b.classList.toggle("is-over", remaining < 0);
  }

  function showStep(i) {
    document.querySelectorAll(".wizard-step").forEach(function (p) { p.classList.toggle("is-active", Number(p.dataset.step) === i); });
    current = i;
    renderStepsBar();
    updateNav();
  }

  function canAdvance() {
    if (current === 0) return !!state.volkId;
    if (current === 1) return !hasSub(state.volkId) || !!state.subId;
    if (current === 2) return attrSpent() <= CREATION.attrPool;
    if (current === 3) return skillSpent() <= CREATION.skillPool;
    return true;
  }

  function updateNav() {
    var back = document.getElementById("wizBack");
    var next = document.getElementById("wizNext");
    var vis = visibleSteps();
    var idx = vis.indexOf(current);
    back.disabled = idx === 0;
    next.textContent = idx === vis.length - 1 ? "Charakterbogen erstellen" : "Weiter";
  }

  function goNext() {
    if (!canAdvance()) return;
    var vis = visibleSteps();
    var idx = vis.indexOf(current);
    if (idx === vis.length - 1) { finish(); return; }
    showStep(vis[idx + 1]);
  }
  function goBack() {
    var vis = visibleSteps();
    var idx = vis.indexOf(current);
    if (idx > 0) showStep(vis[idx - 1]);
  }

  function finish() {
    state.name = document.getElementById("wizName").value.trim() || "Unbenannter Agent";
    state.background = document.getElementById("wizBackground").value.trim();
    var lp = 10 + state.attrs.koerper * 3 + state.attrs.geschick * 2;
    var gg = 10 + state.attrs.verstand * 2 + state.attrs.wille * 3 + state.attrs.praesenz;
    var f = volkData(state.volkId);
    var s = subData(state.volkId);
    var item = s && s.items.find(function (i) { return i.id === state.subId; });
    var payload = {
      name: state.name, background: state.background, volk: f.title,
      subfaction: item ? item.name : "", ability: state.ability,
      attrs: state.attrs, skills: state.skills, lp: lp, gg: gg,
      faction: state.volkId, createdAt: new Date().toISOString()
    };
    try { localStorage.setItem("astranox:character", JSON.stringify(payload)); } catch (e) {}
    window.location.href = "sheet.html";
  }

  function preselectVolk(key) {
    state.volkId = key; state.subId = null; state.ability = null;
    renderVolkPicks(); renderSubPicks(); renderAbilities(); renderStepsBar();
    var vis = visibleSteps();
    showStep(vis[Math.min(1, vis.length - 1)]);
    document.getElementById("wizard").scrollIntoView({ behavior: "smooth" });
  }
  window.AstranoxWizard = { preselectVolk: preselectVolk };

  document.addEventListener("DOMContentLoaded", function () {
    ensureDefaults();
    renderVolkPicks(); renderSubPicks(); renderAttrRows(); renderSkillRows(); renderAbilities();
    showStep(0);
    document.getElementById("wizBack").addEventListener("click", goBack);
    document.getElementById("wizNext").addEventListener("click", goNext);
  });
})();
