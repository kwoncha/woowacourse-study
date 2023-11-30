import InputView from '../utils/Views/InputView.js';
import MESSAGES from '../constants/messages.js';
import Validate from '../utils/Validate/Validate.js';

class RacingGameController {
  constructor() {
    this.validate = new Validate();
  }

  async gameStart() {
    const userName = await InputView(MESSAGES.inputUserName);
    this.validate.isValidUserName(userName);
    const numberOfGame = await InputView(MESSAGES.inputPlayTime);
    this.validate.isValidPlayTime(numberOfGame);
  }
}

export default RacingGameController;
