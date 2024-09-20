import { Button } from "./button.js";

export class GameField {
  constructor() {
    this.gameField = document.createElement("div");
    this.gameField.classList.add("game-field");
    for (let i = 0; i < 9; i++) {
      const button = new Button().render();
      this.gameField.append(button);
      button.setAttribute("button-number", i);
    }
  }

  render() {
    return this.gameField;
  }
}
