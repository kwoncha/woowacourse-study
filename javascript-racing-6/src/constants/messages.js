import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const PREFIX = '[ERROR]';

const MESSAGES = deepFreeze({
  inputUserName: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  inputPlayTime: '시도할 횟수는 몇 회인가요?\n',
  result: '\n실행 결과',
  blink: ' ',
  winner: text => `최종 우승자 : ${text}`,
  currentResult: (user, score) => `${user} : ${'-'.repeat(score)}`,
  ERROR: {
    notValidName: `${PREFIX} 5자리 이하 이름과 형식에 맞게 입력해주세요.`,
    duplicatedUserName: `${PREFIX} 각각 다른 이름을 입력해주세요.`,
    notValidTime: `${PREFIX} 0보다 큰 숫자를 입력해주세요.`,
  },
});

export default MESSAGES;
