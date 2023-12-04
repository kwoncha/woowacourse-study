import Validate from "../utils/Validate/Validate.js";

class LottoWinnigNumber {
  #number;

  constructor(number) {
    const numberArray = number.split(',');

    this.#validate(numberArray);
    this.#number = numberArray.map(number => Number(number));
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
