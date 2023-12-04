import MESSAGE from '../constants/messages.js';
import Lotto from '../domain/Lotto.js';
import InputView from '../utils/Views/InputView.js';
import OutputView from '../utils/Views/OutputView.js';

class LottoController {
  async startGame() {
    const inputMoney = await InputView.readLineAsync(MESSAGE.inputMoney);
    const playingLotto = new Lotto(inputMoney);
    const lottos = playingLotto.getPurchasedLottos();
    OutputView.print(MESSAGE.purchase(lottos.length));
    lottos.forEach(lotto => OutputView.print(lotto));
  }
}

export default LottoController;
