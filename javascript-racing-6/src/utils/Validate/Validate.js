import { REGEXS } from '../../constants/constants.js';
import MESSAGES from '../../constants/messages.js';

class Validate {
  isValidUserName(name) {
    if (!REGEXS.userName.test(name)) throw new Error(MESSAGES.ERROR.notValidName);
  }

  checkNameDuplication(name) {
    const userNumber = name.length;
    const setUser = new Set(name);

    if (userNumber !== setUser.size) throw new Error(MESSAGES.ERROR.duplicatedUserName);
  }

  isValidPlayTime(time) {
    if (!REGEXS.playTime.test(time)) throw new Error(MESSAGES.ERROR.notValidTime);
  }
}

export default Validate;
