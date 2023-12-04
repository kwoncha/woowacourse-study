import { NUMBERS, REGEXS } from '../../constants/constants.js';
import MESSAGE from '../../constants/messages.js';

class Validate {
  isValidMoney(money) {
    if (!REGEXS.money.test(money)) throw new Error(MESSAGE.ERROR.notValidMoney);
  }

  isValidLottoNumbers(numbers) {
    const setNumbers = new Set(numbers);

    if (numbers.length !== NUMBERS.lottoLength) throw new Error(MESSAGE.ERROR.isDuplicate);

    numbers.forEach(number => {
      if (!REGEXS.number.test(number)) throw new Error(MESSAGE.ERROR.notValidRange);
    });

    if (numbers.length !== setNumbers.size) throw new Error(MESSAGE.ERROR.isDuplicate);
  }

  isValidBonusNumbers(number, winningNumbers) {
    if (!REGEXS.number.test(number)) throw new Error(MESSAGE.ERROR.notValidRange);

    winningNumbers.forEach(winningNumber => {
      if (number === winningNumber) throw new Error(MESSAGE.ERROR.isDuplicate);
    });
  }
}

export default Validate;
