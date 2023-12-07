import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const PREFIX = '[ERROR]';

const MESSAGES = deepFreeze({
  ERROR: {
    notValidDate: `${PREFIX} 유효하지 않은 날짜입니다.다시 입력해 주세요.`,
  },
});

export default MESSAGES;
