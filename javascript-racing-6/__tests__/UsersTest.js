import Users from '../src/domain/Users.js';
import randomNumber from '../src/domain/randomNumber.js';
import OutputView from '../src/utils/Views/OutputView.js';
import MESSAGES from '../src/constants/messages.js';

jest.mock('../src/domain/randomNumber.js');
jest.mock('../src/utils/Views/OutputView.js');

describe('Users', () => {
  const users = ['Alice', 'Bob'];
  const time = 3;
  let usersClass;

  beforeEach(() => {
    usersClass = new Users(users, time);
    randomNumber.mockClear();
    OutputView.print.mockClear();
  });

  describe('racingStart 테스트', () => {
    it('지정 횟수 만큼 로직 구현', () => {
      randomNumber.mockReturnValue(3);
      usersClass.racingStart();

      expect(randomNumber).toHaveBeenCalledTimes(time * users.length);
      expect(OutputView.print).toHaveBeenCalledTimes(time * users.length + time);
    });
  });

  describe('processSingleUser 테스트', () => {
    it('랜덤 숫자가 4보다 크면 점수 증가', () => {
      const userObj = { name: 'Alice', score: 0 };
      randomNumber.mockReturnValue(4);

      usersClass.processSingleUser(userObj, 0);

      expect(userObj.score).toBe(1);
    });

    it('랜덤 숫자가 4보다 작으면 점수는 그대로', () => {
      const userObj = { name: 'Alice', score: 0 };
      randomNumber.mockReturnValue(3);

      usersClass.processSingleUser(userObj, 0);

      expect(userObj.score).toBe(0);
    });
  });

  describe('confirmationOfWinner 테스트', () => {
    it('우승자를 정확히 판별하는지 테스트', () => {
      usersClass.users[0].score = 2;
      usersClass.users[1].score = 1;
      usersClass.confirmationOfWinner();

      expect(OutputView.print).toHaveBeenCalledWith(MESSAGES.winner('Alice'));
    });
  });
});
