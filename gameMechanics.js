import players from "./players.js";

let maxTurns = 9;

export const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function winPattern(player) {
  for (const combo of winCombos) {
    const [x, y, z] = combo;
    if (
      player.winCombos[x] === player.name &&
      player.winCombos[y] === player.name &&
      player.winCombos[z] === player.name
    ) {
      player.winner = true;
      document
        .querySelector(`.game-field__button[button-number='${x}']`)
        .classList.add("matched");
      document
        .querySelector(`.game-field__button[button-number='${y}']`)
        .classList.add("matched");
      document
        .querySelector(`.game-field__button[button-number='${z}']`)
        .classList.add("matched");
    }
  }
  if (player.winner) {
    endGame(player);
  }
  if (maxTurns === 0 && !player.winner) {
    endGame(player);
  }
}

export function playerTurn(e) {
  maxTurns--;
  players.map((p) => {
    if (p.currentPlayer === true) {
      p.winCombos[+e.target.getAttribute("button-number")] = p.name;
      winPattern(p);
    } else {
      computerTurn(p);
    }
  });
  e.target.textContent = players.find((p) => p.currentPlayer === true).name;
  e.target.disabled = true;
}

function computerTurn(p) {
  for (const player of players) {
    if (player.winner || maxTurns === 0) {
      return;
    }
  }
  const buttons = document.querySelectorAll(".game-field__button");
  function computerTurnMechanics() {
    const random = Number(Math.random() * 8).toFixed(0);
    if (buttons[random].textContent !== "") {
      computerTurnMechanics();
    } else {
      buttons[random].textContent = p.name;
      p.winCombos[random] = p.name;
    }
  }
  for (const button of buttons) {
    if (!button.disabled) button.disabled = true;
  }
  setTimeout(() => {
    maxTurns--;
    computerTurnMechanics();
    for (const button of buttons) {
      if (button.disabled && !button.textContent) button.disabled = false;
    }
    winPattern(p);
  }, 500);
}

function endGame(player) {
  const buttons = document.querySelectorAll(".game-field__button");
  for (const button of buttons) {
    button.disabled = true;
  }
  const root = document.getElementById("root");
  const message = document.createElement("div");
  message.classList.add("message");
  message.textContent = player.winner ? `${player.name} wins!` : "Draw!";
  const restartIcon = document.createElement("img");
  restartIcon.setAttribute("src", "./replay-icon.svg");
  restartIcon.setAttribute("title", "Restart");
  restartIcon.classList.add("icon");
  restartIcon.addEventListener("click", () => location.reload());
  message.append(restartIcon);
  root.append(message);
}
