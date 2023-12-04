import LottoController from './controller/LottoController.js';

class App {
  async play() {
    this.lottoController = new LottoController();
    await this.lottoController.startGame();
  }
}

export default App;
