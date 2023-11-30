import InputView from '../utils/Views/InputView.js';
import MESSAGES from '../constants/messages.js';
import Validate from '../utils/Validate/Validate.js';
import Users from '../domain/Users.js';

class RacingGameController {
  constructor() {
    this.validate = new Validate();
  }

  async gameStart() {
    const userName = await InputView(MESSAGES.inputUserName);
    this.validate.isValidUserName(userName);
    this.validate.checkNameDuplication(this.splitUserName(userName));
    const numberOfGame = await InputView(MESSAGES.inputPlayTime);
    this.validate.isValidPlayTime(numberOfGame);
    this.users = new Users(this.splitUserName(userName), Number(numberOfGame));
  }

  splitUserName(name) {
    return name.split(',');
  }
}

export default RacingGameController;
