document.addEventListener("DOMContentLoaded", function () {
  let squad = document.querySelector(".Box");

  function enter() {
    const colors = [
      "green",
      "pink",
      "red",
      "purple",
      "blue",
      "yellow",
      "grey",
      "white",
      "aquamarine",
      "chocolate",
      "darkorange",
      "fuchsia",
      "cyan",
    ];
    const randomColors = colors[Math.floor(Math.random() * colors.length)];

    squad.style.backgroundColor = randomColors;

    let tamanhoSalvoCSS = getComputedStyle(squad);
    let LessWidth = parseInt(tamanhoSalvoCSS./*style.*/ width);
    let LessHeight = parseInt(tamanhoSalvoCSS./*style.*/ height);

    LessWidth -= 0.5;
    LessHeight -= 0.5;

    squad.style.width = `${LessWidth}px`;
    squad.style.height = `${LessHeight}px`;
  }

  squad.addEventListener("mouseenter", enter);
});
