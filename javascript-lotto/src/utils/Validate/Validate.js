import { REGEXS } from '../../constants/constants.js';
import MESSAGES from '../../constants/messages.js';

class Validate {
  isValidMoney(money) {
    if (!REGEXS.money.test(money)) throw new Error(MESSAGES.ERROR.notValidMoney);
  }
}

export default Validate;
