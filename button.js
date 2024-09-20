import { playerTurn } from "./gameMechanics.js";

export class Button {
  constructor() {
    this.button = document.createElement("button");
    this.button.addEventListener("click", playerTurn.bind(this));
    this.button.classList.add("game-field__button");
  }

  render() {
    return this.button;
  }
}
