import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const PREFIX = '[ERROR]';

const MESSAGE = deepFreeze({
  inputMoney: '구입금액을 입력해 주세요.\n',
  purchase: number => `\n${number}개를 구매했습니다.`,
  lottoArray: array => `[${array.join(', ')}]`,
  lottoNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
  result: '\n당첨 통계',
  split: '---',
  prizeText: (key, prizeAmount, prizeCount) => {
    if (key === '5.1') {
      return `5개 일치, 보너스 볼 일치 (${prizeAmount}) - ${prizeCount}개`;
    }

    return `${key}개 일치 (${prizeAmount}) - ${prizeCount}개`;
  },
  profit: profit => `총 수익률은 ${profit}%입니다.`,
  ERROR: {
    notValidMoney: `${PREFIX} 1000원 단위로 입력해주세요.`,
    notValidRange: `${PREFIX} 1 ~ 45까지 숫자를 입력해주세요.`,
    isDuplicate: `${PREFIX} 중복 되지 않은 숫자를 입력해주세요.`,
  },
});

export default MESSAGE;
