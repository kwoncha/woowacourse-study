import { NUMBERS } from '../constants/constants.js';
import Validate from '../utils/Validate/Validate.js';
import randomLottoNumbers from './randomLottoNumbers.js';

class Lotto {
  #purchasedLotto = [];

  constructor(money) {
    this.validate = new Validate();
    this.validate.isValidMoney(money);
    this.numberOfLottoPurchases = Number(money) / NUMBERS.lottoPrice;
    this.buyingLotto();
  }

  buyingLotto() {
    for (let i = 0; i < this.numberOfLottoPurchases; i++) {
      this.#purchasedLotto.push(this.lottoNumberSorting(randomLottoNumbers()));
    }
  }

  lottoNumberSorting(numbers) {
    return numbers.sort((firstNumber, nextNumber) => firstNumber - nextNumber);
  }
}

export default Lotto;
