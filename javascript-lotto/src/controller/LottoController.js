import MESSAGE from '../constants/messages.js';
import Lotto from '../domain/Lotto.js';
import LottoCalculator from '../domain/LottoCalculator.js';
import LottoWinnigNumber from '../domain/LottoWinnigNumber.js';
import Validate from '../utils/Validate/Validate.js';
import InputView from '../utils/Views/InputView.js';
import OutputView from '../utils/Views/OutputView.js';

class LottoController {
  async startGame() {
    const [lottos, money] = await this.getValidatedPurchaseInput();

    OutputView.print(MESSAGE.purchase(lottos.length));
    lottos.forEach(lotto => OutputView.print(MESSAGE.lottoArray(lotto)));

    const winningNumbersArray = await this.getValidatedWinningNumbersInput();
    const bonusNumber = await this.getValidatedBonusNumberInput(winningNumbersArray);

    this.lottoCalculator = new LottoCalculator(lottos, winningNumbersArray, bonusNumber);
    const profit = this.lottoCalculator.calculateProfit(money);
    const prizes = this.lottoCalculator.getPrizes();

    OutputView.printWinningStatistics(prizes, profit);
  }

  async getValidatedPurchaseInput() {
    const inputMoney = await InputView.readLineAsync(MESSAGE.inputMoney);

    try {
      const playingLotto = new Lotto(inputMoney);
      const lottos = playingLotto.getPurchasedLottos();

      return [lottos, Number(inputMoney)];
    } catch (error) {
      OutputView.print(error.message);

      return this.getValidatedPurchaseInput();
    }
  }

  async getValidatedWinningNumbersInput() {
    const winningNumbersString = await InputView.readLineAsync(MESSAGE.lottoNumbers);

    try {
      this.lottoWinningNumber = new LottoWinnigNumber(winningNumbersString);
      const winningNumbersArray = this.lottoWinningNumber.getWinningNumbers();

      return winningNumbersArray;
    } catch (error) {
      OutputView.print(error.message);

      return this.getValidatedWinningNumbersInput();
    }
  }

  async getValidatedBonusNumberInput(winningNumbers) {
    const bonusNumber = await InputView.readLineAsync(MESSAGE.bonusNumber);

    try {
      const validate = new Validate();
      validate.isValidBonusNumbers(Number(bonusNumber), winningNumbers);

      return Number(bonusNumber);
    } catch (error) {
      OutputView.print(error.message);

      return this.getValidatedBonusNumberInput(winningNumbers);
    }
  }
}

export default LottoController;
