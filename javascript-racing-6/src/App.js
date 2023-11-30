import RacingGameController from './controller/RacingGameController.js';

class App {
  constructor() {
    this.racingGameController = new RacingGameController();
  }

  async play() {
    await this.racingGameController.gameStart();
  }
}

export default App;
