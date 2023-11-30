import randomNumber from './randomNumber.js';
import { NUMBERS } from '../constants/constants.js';
import OutputView from '../utils/Views/OutputView.js';
import MESSAGES from '../constants/messages.js';

class Users {
  constructor(users, time) {
    this.users = users.map(user => ({ name: user, score: 0 }));
    this.time = time;
  }

  racingStart() {
    for (let i = 0; i < this.time; i++) {
      this.processCurrentRound();
      OutputView.print(MESSAGES.blink);
    }
  }

  processCurrentRound() {
    this.users.forEach((userObj, index) => {
      this.processSingleUser(userObj, index);
    });
  }

  processSingleUser(userObj, index) {
    const createdRandomNumber = randomNumber();
    if (createdRandomNumber >= NUMBERS.go) userObj.score++;

    OutputView.print(MESSAGES.currentResult(userObj.name, userObj.score));
    this.users[index] = userObj;
  }

  confirmationOfWinner() {
    const maxScore = this.findMaxScore();
    const winners = this.findWinners(maxScore);
    OutputView.print(MESSAGES.winner(winners.join(',')));
  }

  findMaxScore() {
    return Math.max(...this.users.map(user => user.score));
  }

  findWinners(maxScore) {
    return this.users.filter(user => user.score === maxScore).map(user => user.name);
  }
}

export default Users;
