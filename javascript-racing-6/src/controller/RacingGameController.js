import InputView from '../utils/Views/InputView.js';
import MESSAGES from '../constants/messages.js';
import Validate from '../utils/Validate/Validate.js';
import Users from '../domain/Users.js';
import OutputView from '../utils/Views/OutputView.js';

class RacingGameController {
  constructor() {
    this.validate = new Validate();
  }

  async gameStart() {
    const userName = await this.promptForUserName();
    const numberOfGame = await this.promptForNumberOfGame();
    this.users = new Users(this.splitUserName(userName), Number(numberOfGame));
    this.runGame();
  }

  async promptForUserName() {
    const userName = await InputView.readLineAsync(MESSAGES.inputUserName);
    this.validateUserName(userName);
    return userName;
  }

  validateUserName(userName) {
    this.validate.isValidUserName(userName);
    this.validate.checkNameDuplication(this.splitUserName(userName));
  }

  async promptForNumberOfGame() {
    const numberOfGame = await InputView.readLineAsync(MESSAGES.inputPlayTime);
    this.validate.isValidPlayTime(numberOfGame);
    return numberOfGame;
  }

  runGame() {
    OutputView.print(MESSAGES.result);
    this.users.racingStart();
    this.users.confirmationOfWinner();
  }

  splitUserName(name) {
    return name.split(',');
  }
}

export default RacingGameController;
