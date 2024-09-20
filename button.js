import { playerTurn } from "./gameMechanics.js";

export class Button {
  constructor() {
    this.button = document.createElement("button");
    this.button.addEventListener("click", this.handleButton);
    this.button.classList.add("game-field__button");
  }

  render() {
    return this.button;
  }

  handleButton(e) {
    playerTurn(e);
  }
}
