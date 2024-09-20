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
    console.log(`${player.name} wins!`);
    endGame();
  }
  if (maxTurns === 0 && !player.winner) {
    console.log("Draw!");
    endGame();
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

function endGame() {
  const buttons = document.querySelectorAll(".game-field__button");
  for (const button of buttons) {
    button.disabled = true;
  }
}
