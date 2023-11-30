import randomNumber from './randomNumber.js';
import { NUMBERS } from '../constants/constants.js';
import OutputView from '../utils/Views/OutputView.js';
import MESSAGES from '../constants/messages.js';

class Users {
  constructor(users, time) {
    this.users = users.map(user => [user, 0]);
    this.time = time;
  }

  racingStart() {
    for (let i = 0; i < this.time; i++) {
      this.users.map(value => {
        const [user, count] = value;
        const createdRandomNumber = randomNumber();
        if (createdRandomNumber >= NUMBERS.go) count++;

        OutputView.print(MESSAGES.currentResult(user, count));
        return [user, count];
      });
    }
  }
}

export default Users;
