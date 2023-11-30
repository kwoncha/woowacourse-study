import InputView from '../utils/Views/InputView.js';
import MESSAGES from '../constants/messages.js';

class RacingGameController {
  constructor() {
    this.inputView = new InputView();
  }

  async gameStart() {
    const userName = await this.inputView(MESSAGES.inputUserName);
  }
}

export default RacingGameController;
