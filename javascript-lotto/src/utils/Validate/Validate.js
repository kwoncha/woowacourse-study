import { REGEXS } from '../../constants/constants.js';
import MESSAGE from '../../constants/messages.js';

class Validate {
  isValidMoney(money) {
    if (!REGEXS.money.test(money)) throw new Error(MESSAGE.ERROR.notValidMoney);
  }

  isValidLottoNumbers(numbers) {
    if (REGEXS.winningNumbers.test(numbers)) throw new Error(MESSAGE.ERROR.notValidWinningNumbers);
  }

  isValidBonusNumbers(number, winningNumbers) {
    if (REGEXS.bonusNumbers.test(number)) throw new Error(MESSAGE.ERROR.notValidBonusNumber);

    winningNumbers.forEach(winningNumber => {
      if (number === winningNumber) throw new Error(MESSAGE.ERROR.isDuplicate);
    });
  }
}

export default Validate;
