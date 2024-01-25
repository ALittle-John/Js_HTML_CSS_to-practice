document.addEventListener("DOMContentLoaded", function () {
  const squadAgain = document.querySelector(".Box");
  const countdown = document.querySelector(".Inumber");
  let seconds = 30;
  let TimeInterval;

  function UpdadeCountdown() {
    seconds--;
    countdown.textContent = seconds;
    let tamanhoSalvoCSS2 = getComputedStyle(squadAgain);

    if (seconds === -1) {
      clearInterval(TimeInterval);
      if (tamanhoSalvoCSS2.width === "1px") {
        window.alert("Parabéns! Você é Incrível!");
      } else {
        window.alert("Que pena... você precisa de mais agilidade!");
      }
      location.reload();
    }
  }

  function StartCountdown() {
    TimeInterval = setInterval(UpdadeCountdown, 1000);
  }

  function TimerSquad() {
    StartCountdown();
    squadAgain.removeEventListener("mouseenter", TimerSquad);
  }

  squadAgain.addEventListener("mouseenter", TimerSquad);
});
