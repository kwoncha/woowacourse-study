import { REGEXS } from '../../constants/constants.js';
import MESSAGES from '../../constants/messages.js';

class Validate {
  isValidUserName(name) {
    if (!REGEXS.userName.test(name)) throw new Error(MESSAGES.ERROR.notValidName);
  }

  checkNameDuplication(name) {
    const splitedUserName = this.splitUserName(name);
    const userNumber = splitedUserName.length;
    const setUser = new Set(splitedUserName);

    if (userNumber !== setUser.size) throw new Error(MESSAGES.ERROR.duplicatedUserName);
  }

  isValidPlayTime(time) {
    if (!REGEXS.playTime.test(time)) throw new Error(MESSAGES.ERROR.notValidTime);
  }

  splitUserName(name) {
    return name.split(',');
  }
}

export default Validate;
