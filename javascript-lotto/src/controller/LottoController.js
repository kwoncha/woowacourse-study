import MESSAGE from '../constants/messages.js';
import Lotto from '../domain/Lotto.js';
import LottoWinnigNumber from '../domain/LottoWinnigNumber.js';
import Validate from '../utils/Validate/Validate.js';
import InputView from '../utils/Views/InputView.js';
import OutputView from '../utils/Views/OutputView.js';

class LottoController {
  async startGame() {
    const inputMoney = await InputView.readLineAsync(MESSAGE.inputMoney);
    const playingLotto = new Lotto(inputMoney);
    const lottos = playingLotto.getPurchasedLottos();
    OutputView.print(MESSAGE.purchase(lottos.length));
    lottos.forEach(lotto => OutputView.print(MESSAGE.lottoArray(lotto)));
    const winningNumbersString = await InputView.readLineAsync(MESSAGE.lottoNumbers);
    this.lottoWinningNumber = new LottoWinnigNumber(winningNumbersString);
    const winningNumbersArray = this.lottoWinningNumber.getWinningNumbers();
    const bonusNumber = await InputView.readLineAsync(MESSAGE.bonusNumber);
    const validate = new Validate();
    validate.isValidBonusNumbers(Number(bonusNumber), winningNumbersArray);
  }
}

export default LottoController;
