import { REGEXS } from "../constants/constants";
import MESSAGE from "../constants/messages";
import Validate from "../utils/Validate/Validate";

class LottoWinnigNumber {
  #number;

  constructor(winningNumbers) {
    this.#validate(winningNumbers);
    this.#number = winningNumbers.split(',').map(number => Number(number));
  }

  #validate(numbers) {
    const validate = new Validate();
    if (REGEXS.winningNumbers.test(numbers)) throw new Error(MESSAGE.ERROR.notValidWinningNumbers);
  }

  getWinningNumbers() {
    return this.#number;
  }
}

export default LottoWinnigNumber;
