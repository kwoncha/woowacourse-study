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
        let [user, score] = value;
        const createdRandomNumber = randomNumber();
        if (createdRandomNumber >= NUMBERS.go) score++;

        OutputView.print(MESSAGES.currentResult(user, score));
        return [user, score];
      });

      OutputView.print(MESSAGES.blink);
    }
  }

  confirmationOfWinner() {
    const winner = [];
    const maxScore = Math.max(...this.users.map(item => item[1]));

    this.users.forEach(value => {
      const [user, score] = value;
      if (score === maxScore) winner.push(user);
    });

    OutputView.print(MESSAGES.winner(winner.join(',')));
  }
}

export default Users;
