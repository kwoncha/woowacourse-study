import ChristmaEventController from './controller/ChristmasEventController.js';

class App {
  async run() {
    this.christmasEventController = new ChristmaEventController();
  }
}

export default App;
