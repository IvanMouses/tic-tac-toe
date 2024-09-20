import { GameField } from "./field.js";

class App {
  constructor() {
    this.app = document.getElementById("root");
    this.app.append(new GameField().render());
  }
}

new App();
