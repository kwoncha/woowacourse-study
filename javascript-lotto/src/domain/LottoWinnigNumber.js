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
    validate.isValidLottoNumbers(numbers);
  }

  getWinningNumbers() {
    return this.#number;
  }
}

export default LottoWinnigNumber;
