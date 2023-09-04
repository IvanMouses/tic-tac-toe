const gameField = document.querySelectorAll(".game__field");
const game = document.querySelector(".game");
const gamePlayer1Score = document.querySelector(".game__player1-score");
const gamePlayer2Score = document.querySelector(".game__player2-score");
const gamePlayer1ScoreCount = document.querySelector(
  ".game__player1-scorecount"
);
const gamePlayer2ScoreCount = document.querySelector(
  ".game__player2-scorecount"
);
const gameModalWindowText = document.querySelector(".game__modalwindow-text");
const gameModalWindowButton = document.querySelector(
  ".game__modalwindow-button"
);
gameModalWindowButton.addEventListener("click", function () {
  gamePlayer1Score.classList.add("active-player");
  enableGameFields();
  gameModalWindowButton.disabled = true;
  gameModalWindowButton.textContent = "Начать игру";
  gameModalWindowText.textContent = "Побеждает игрок, первым набравший 5 очков";
  player1TotalScore = 0;
  player2TotalScore = 0;
  gamePlayer1ScoreCount.textContent = "";
  gamePlayer2ScoreCount.textContent = "";
  if (gamePlayer2Score.classList.contains("active-player")) {
    gamePlayer2Score.classList.remove("active-player");
    game.classList.remove("player1");
    game.classList.add("player2");
  }
});

let count = gameField.length;
let player1TotalScore = 0;
let player2TotalScore = 0;

const disableGameField = function () {
  gameField[0].disabled = true;
  gameField[1].disabled = true;
  gameField[2].disabled = true;
  gameField[3].disabled = true;
  gameField[4].disabled = true;
  gameField[5].disabled = true;
  gameField[6].disabled = true;
  gameField[7].disabled = true;
  gameField[8].disabled = true;
};
const enableGameFields = function () {
  gameField[0].disabled = false;
  gameField[1].disabled = false;
  gameField[2].disabled = false;
  gameField[3].disabled = false;
  gameField[4].disabled = false;
  gameField[5].disabled = false;
  gameField[6].disabled = false;
  gameField[7].disabled = false;
  gameField[8].disabled = false;
};

const markPlayer1Winning = function () {
  if (
    game.classList.contains("game-over") &&
    gameField[0].textContent === "X" &&
    gameField[1].textContent === "X" &&
    gameField[2].textContent === "X"
  ) {
    gameField[0].classList.add("win-field") ||
      gameField[1].classList.add("win-field") ||
      gameField[2].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[3].textContent === "X" &&
    gameField[4].textContent === "X" &&
    gameField[5].textContent === "X"
  ) {
    gameField[3].classList.add("win-field") ||
      gameField[4].classList.add("win-field") ||
      gameField[5].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[6].textContent === "X" &&
    gameField[7].textContent === "X" &&
    gameField[8].textContent === "X"
  ) {
    gameField[6].classList.add("win-field") ||
      gameField[7].classList.add("win-field") ||
      gameField[8].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[0].textContent === "X" &&
    gameField[3].textContent === "X" &&
    gameField[6].textContent === "X"
  ) {
    gameField[0].classList.add("win-field") ||
      gameField[3].classList.add("win-field") ||
      gameField[6].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[1].textContent === "X" &&
    gameField[4].textContent === "X" &&
    gameField[7].textContent === "X"
  ) {
    gameField[1].classList.add("win-field") ||
      gameField[4].classList.add("win-field") ||
      gameField[7].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[2].textContent === "X" &&
    gameField[5].textContent === "X" &&
    gameField[8].textContent === "X"
  ) {
    gameField[2].classList.add("win-field") ||
      gameField[5].classList.add("win-field") ||
      gameField[8].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[0].textContent === "X" &&
    gameField[4].textContent === "X" &&
    gameField[8].textContent === "X"
  ) {
    gameField[0].classList.add("win-field") ||
      gameField[4].classList.add("win-field") ||
      gameField[8].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[2].textContent === "X" &&
    gameField[4].textContent === "X" &&
    gameField[6].textContent === "X"
  ) {
    gameField[2].classList.add("win-field") ||
      gameField[4].classList.add("win-field") ||
      gameField[6].classList.add("win-field");
  }
};

const markPlayer2Winning = function () {
  if (
    game.classList.contains("game-over") &&
    gameField[0].textContent === "0" &&
    gameField[1].textContent === "0" &&
    gameField[2].textContent === "0"
  ) {
    gameField[0].classList.add("win-field") ||
      gameField[1].classList.add("win-field") ||
      gameField[2].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[3].textContent === "0" &&
    gameField[4].textContent === "0" &&
    gameField[5].textContent === "0"
  ) {
    gameField[3].classList.add("win-field") ||
      gameField[4].classList.add("win-field") ||
      gameField[5].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[6].textContent === "0" &&
    gameField[7].textContent === "0" &&
    gameField[8].textContent === "0"
  ) {
    gameField[6].classList.add("win-field") ||
      gameField[7].classList.add("win-field") ||
      gameField[8].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[0].textContent === "0" &&
    gameField[3].textContent === "0" &&
    gameField[6].textContent === "0"
  ) {
    gameField[0].classList.add("win-field") ||
      gameField[3].classList.add("win-field") ||
      gameField[6].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[1].textContent === "0" &&
    gameField[4].textContent === "0" &&
    gameField[7].textContent === "0"
  ) {
    gameField[1].classList.add("win-field") ||
      gameField[4].classList.add("win-field") ||
      gameField[7].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[2].textContent === "0" &&
    gameField[5].textContent === "0" &&
    gameField[8].textContent === "0"
  ) {
    gameField[2].classList.add("win-field") ||
      gameField[5].classList.add("win-field") ||
      gameField[8].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[0].textContent === "0" &&
    gameField[4].textContent === "0" &&
    gameField[8].textContent === "0"
  ) {
    gameField[0].classList.add("win-field") ||
      gameField[4].classList.add("win-field") ||
      gameField[8].classList.add("win-field");
  } else if (
    game.classList.contains("game-over") &&
    gameField[2].textContent === "0" &&
    gameField[4].textContent === "0" &&
    gameField[6].textContent === "0"
  ) {
    gameField[2].classList.add("win-field") ||
      gameField[4].classList.add("win-field") ||
      gameField[6].classList.add("win-field");
  }
};

for (let i = 0; i < gameField.length; i++) {
  gameField[i].addEventListener("click", function () {
    count--;
    if (game.classList.contains("player1")) {
      game.classList.remove("player1");
      game.classList.add("player2");
      gamePlayer1Score.classList.add("active-player");
      gamePlayer2Score.classList.remove("active-player");
    } else if (game.classList.contains("player2")) {
      game.classList.remove("player2");
      game.classList.add("player1");
      gamePlayer1Score.classList.remove("active-player");
      gamePlayer2Score.classList.add("active-player");
    }
    if (game.classList.contains("player1")) {
      gameField[i].textContent = "X";
      gameField[i].disabled = true;
    } else if (game.classList.contains("player2")) {
      gameField[i].textContent = "0";
      gameField[i].disabled = true;
    }
    if (
      (gameField[0].textContent === "X" &&
        gameField[1].textContent === "X" &&
        gameField[2].textContent === "X") ||
      (gameField[3].textContent === "X" &&
        gameField[4].textContent === "X" &&
        gameField[5].textContent === "X") ||
      (gameField[6].textContent === "X" &&
        gameField[7].textContent === "X" &&
        gameField[8].textContent === "X") ||
      (gameField[0].textContent === "X" &&
        gameField[3].textContent === "X" &&
        gameField[6].textContent === "X") ||
      (gameField[1].textContent === "X" &&
        gameField[4].textContent === "X" &&
        gameField[7].textContent === "X") ||
      (gameField[2].textContent === "X" &&
        gameField[5].textContent === "X" &&
        gameField[8].textContent === "X") ||
      (gameField[0].textContent === "X" &&
        gameField[4].textContent === "X" &&
        gameField[8].textContent === "X") ||
      (gameField[2].textContent === "X" &&
        gameField[4].textContent === "X" &&
        gameField[6].textContent === "X")
    ) {
      console.log("X побеждает!");
      count = gameField.length;
      player1TotalScore++;
      gamePlayer1ScoreCount.textContent = player1TotalScore;
      game.classList.add("game-over", "player1-wins");
      markPlayer1Winning();
      game.classList.remove("player1");
      game.classList.add("player2");
      gamePlayer1Score.classList.add("active-player");
      gamePlayer2Score.classList.remove("active-player");
      disableGameField();
      setTimeout(() => {
        if (game.classList.contains("game-over")) {
          for (let i = 0; i < gameField.length; i++) {
            gameField[i].classList.remove("win-field");
            if (gameField[i].textContent !== "") {
              gameField[i].textContent = "";
              game.classList.remove("game-over", "player1-wins");
              gamePlayer1Score.classList.add("active-player");
              if (player1TotalScore !== 5) {
                enableGameFields();
              }
            }
          }
        }
      }, 1500);
    } else if (
      (gameField[0].textContent === "0" &&
        gameField[1].textContent === "0" &&
        gameField[2].textContent === "0") ||
      (gameField[3].textContent === "0" &&
        gameField[4].textContent === "0" &&
        gameField[5].textContent === "0") ||
      (gameField[6].textContent === "0" &&
        gameField[7].textContent === "0" &&
        gameField[8].textContent === "0") ||
      (gameField[0].textContent === "0" &&
        gameField[3].textContent === "0" &&
        gameField[6].textContent === "0") ||
      (gameField[1].textContent === "0" &&
        gameField[4].textContent === "0" &&
        gameField[7].textContent === "0") ||
      (gameField[2].textContent === "0" &&
        gameField[5].textContent === "0" &&
        gameField[8].textContent === "0") ||
      (gameField[0].textContent === "0" &&
        gameField[4].textContent === "0" &&
        gameField[8].textContent === "0") ||
      (gameField[2].textContent === "0" &&
        gameField[4].textContent === "0" &&
        gameField[6].textContent === "0")
    ) {
      console.log("0 побеждает!");
      count = gameField.length;
      player2TotalScore++;
      gamePlayer2ScoreCount.textContent = player2TotalScore;
      game.classList.add("game-over", "player2-wins");
      markPlayer2Winning();
      game.classList.remove("player2");
      game.classList.add("player1");
      gamePlayer1Score.classList.remove("active-player");
      gamePlayer2Score.classList.add("active-player");
      disableGameField();
      setTimeout(() => {
        if (game.classList.contains("game-over")) {
          for (let i = 0; i < gameField.length; i++) {
            gameField[i].classList.remove("win-field");
            if (gameField[i].textContent !== "") {
              gameField[i].textContent = "";
              game.classList.remove("game-over", "player2-wins");
              gamePlayer2Score.classList.add("active-player");
              if (player2TotalScore !== 5) {
                enableGameFields();
              }
            }
          }
        }
      }, 1500);
    }
    if (count === 0 && !game.classList.contains("game-over")) {
      console.log("Ничья!");
      disableGameField();
      count = gameField.length;
      for (let i = 0; i < gameField.length; i++) {
        gameField[i].classList.add("draw-field");
      }
      setTimeout(() => {
        for (let i = 0; i < gameField.length; i++) {
          gameField[i].classList.remove("draw-field");
          if (gameField[i].textContent !== "") {
            gameField[i].textContent = "";
            enableGameFields();
          }
        }
      }, 1500);
    }
    if (player1TotalScore === 5) {
      gameModalWindowText.textContent = "Игрок 1 побеждает! Поздравляем!";
      gameModalWindowButton.disabled = false;
      gameModalWindowButton.textContent = "Новая игра";
    } else if (player2TotalScore === 5) {
      gameModalWindowText.textContent = "Игрок 2 побеждает! Поздравляем!";
      gameModalWindowButton.disabled = false;
      gameModalWindowButton.textContent = "Новая игра";
    }
  });
}
