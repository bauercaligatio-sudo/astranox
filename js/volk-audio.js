(function () {
  "use strict";
  var body = document.body;
  var src = body.dataset.audioSrc;
  var vol = Number(body.dataset.audioVolume || 0.85);
  if (!src) return;

  var audio = new Audio(src);
  audio.loop = true;
  audio.preload = "metadata";

  var dockToggle = document.getElementById('dockToggle');
  var dockStatus = document.getElementById('dockStatus');
  var volumeSlider = document.getElementById('volume');
  var soundToggle = document.getElementById('soundToggle');
  var soundLabel = soundToggle ? soundToggle.querySelector('.sound-label') : null;
  var audioCard = document.getElementById('audioCard');
  var audioInline = document.getElementById('audioInline');

  var baseVolume = window.AstranoxAudio.getVolume(volumeSlider ? Number(volumeSlider.value) : 0.55);
  if (volumeSlider) volumeSlider.value = String(baseVolume);
  var enabled = false;

  function applyVolume() { audio.volume = Math.min(1, baseVolume * vol); }
  applyVolume();

  function syncUI(playing) {
    if (dockToggle) dockToggle.textContent = playing ? '\u2161' : '\u25B6';
    if (dockStatus) dockStatus.textContent = playing ? 'Track läuft' : (enabled ? 'Pausiert' : 'Klang aus');
    if (audioCard) audioCard.classList.toggle('playing', playing);
    if (audioInline) audioInline.textContent = playing ? 'Pausieren' : 'Abspielen';
    if (soundToggle) soundToggle.setAttribute('aria-pressed', String(enabled));
    if (soundLabel) soundLabel.textContent = enabled ? 'Klang aktiv' : 'Klang aktivieren';
  }

  function play() {
    enabled = true;
    window.AstranoxAudio.setEnabled(true);
    applyVolume();
    audio.play().then(function () { syncUI(true); }).catch(function () { syncUI(false); });
  }
  function pause() { enabled = false; window.AstranoxAudio.setEnabled(false); audio.pause(); syncUI(false); }
  function toggle() { if (audio.paused) play(); else pause(); }

  if (dockToggle) dockToggle.addEventListener('click', toggle);
  if (audioInline) audioInline.addEventListener('click', toggle);
  if (soundToggle) soundToggle.addEventListener('click', toggle);
  if (volumeSlider) volumeSlider.addEventListener('input', function () {
    baseVolume = Number(volumeSlider.value);
    window.AstranoxAudio.setVolume(baseVolume);
    applyVolume();
  });

  syncUI(false);

  if (window.AstranoxAudio.getEnabled()) {
    window.AstranoxAudio.armAutoResume(function () {
      if (!enabled) play();
    });
  }
})();
