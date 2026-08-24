(function () {
  "use strict";

  var button = document.getElementById("probeRoll");
  if (!button) return;

  var die = document.getElementById("probeDie");
  var result = document.getElementById("probeResult");
  var attribute = document.getElementById("probeAttribute");
  var skill = document.getElementById("probeSkill");
  var difficulty = document.getElementById("probeDifficulty");

  function setResult(kind, label, headline, explanation) {
    result.className = "probe-result " + kind;
    result.innerHTML =
      '<span class="probe-result-label">' + label + '</span>' +
      '<strong>' + headline + '</strong>' +
      '<p>' + explanation + '</p>';
  }

  button.addEventListener("click", function () {
    var roll = Math.floor(Math.random() * 20) + 1;
    var modifier = Number(attribute.value) + Number(skill.value);
    var target = Number(difficulty.value);
    var total = roll + modifier;
    var margin = total - target;
    var critical = roll === 20 || (roll !== 1 && margin >= 5);
    var fumble = roll === 1 || (roll !== 20 && margin <= -5);

    button.classList.remove("is-rolling");
    void button.offsetWidth;
    button.classList.add("is-rolling");
    die.textContent = roll;

    if (critical) {
      setResult("is-critical", "Kritischer Erfolg", roll + " + " + modifier + " = " + total + " gegen " + target,
        "Die Probe gelingt außergewöhnlich gut. Du darfst zuerst vorschlagen, welche zusätzliche positive Folge eintritt.");
    } else if (fumble) {
      setResult("is-critical", "Patzer", roll + " + " + modifier + " = " + total + " gegen " + target,
        "Die Probe scheitert deutlich. Du darfst zuerst vorschlagen, welche unangenehme Konsequenz die Szene verschärft.");
    } else if (total >= target) {
      setResult("is-success", "Erfolg", roll + " + " + modifier + " = " + total + " gegen " + target,
        "Du erreichst dein Ziel. Die Handlung gelingt ohne zusätzliche kritische Folge.");
    } else {
      setResult("is-failure", "Misserfolg", roll + " + " + modifier + " = " + total + " gegen " + target,
        "Du erreichst den Zielwert nicht. Die Spielleitung beschreibt, was dich aufhält oder welchen Preis du zahlen musst.");
    }

    window.setTimeout(function () { button.classList.remove("is-rolling"); }, 600);
  });
})();
