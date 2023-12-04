import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const PREFIX = '[ERROR]';

const MESSAGE = deepFreeze({
  inputMoney: '구입금액을 입력해 주세요.\n',
  purchase: number => `\n${number}개를 구매했습니다.`,
  lottoArray: array => `[${array.join(', ')}]`,
  lottoNumbers: '당첨 번호를 입력해 주세요.\n',
  bonusNumber: '보너스 번호를 입력해 주세요.\n',
  ERROR: {
    notValidMoney: `${PREFIX} 1000원 단위로 입력해주세요.`,
    notValidWinningNumbers: `${PREFIX} 1 ~ 45까지 서로 다른 6개의 숫자를 입력해주세요.`,
    notValidBonusNumber: `${PREFIX} 1 ~ 45까지 숫자 중 하나를 입력해주세요.`,
    isDuplicate: `${PREFIX} 1 ~ 45까지 숫자 중 하나를 입력해주세요.`,
  },
});

export default MESSAGE;
