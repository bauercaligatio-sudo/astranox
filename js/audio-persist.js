/* ============================================================
   Astranox — Persistenter Klang-Status
   Da es sich um klassische Mehrseiten-Navigation handelt (kein
   SPA-Router), kann Audio nicht wörtlich über einen Seitenwechsel
   hinweg weiterlaufen — der Browser lädt jedes Mal neu. Was wir
   stattdessen tun: den "Klang aktiviert"-Wunsch des Nutzers in
   localStorage merken und auf jeder neuen Seite sofort wieder
   versuchen abzuspielen. Klappt der Autoplay-Versuch nicht (die
   meisten Browser verlangen eine Geste auf der jeweiligen Seite),
   greift ein einmaliger Fallback: die erste Interaktion irgendwo
   auf der Seite setzt die Wiedergabe fort — spürt sich für den
   Nutzer nahtlos an, auch wenn technisch jede Seite neu startet.
   ============================================================ */

window.AstranoxAudio = (function () {
  "use strict";

  var ENABLED_KEY = "astranox:soundEnabled";
  var VOLUME_KEY = "astranox:volume";

  function getEnabled() {
    return localStorage.getItem(ENABLED_KEY) === "1";
  }
  function setEnabled(value) {
    localStorage.setItem(ENABLED_KEY, value ? "1" : "0");
  }
  function getVolume(fallback) {
    var v = localStorage.getItem(VOLUME_KEY);
    return v !== null ? Number(v) : fallback;
  }
  function setVolume(value) {
    localStorage.setItem(VOLUME_KEY, String(value));
  }

  function armAutoResume(playFn) {
    var attempted = false;
    var tryPlay = function () {
      if (attempted) return;
      attempted = true;
      playFn();
    };
    tryPlay();
    ["pointerdown", "keydown"].forEach(function (evt) {
      document.addEventListener(evt, function once() {
        if (getEnabled()) playFn();
        document.removeEventListener(evt, once);
      }, { once: true });
    });
  }

  return { getEnabled: getEnabled, setEnabled: setEnabled, getVolume: getVolume, setVolume: setVolume, armAutoResume: armAutoResume };
})();
