import MESSAGE from '../constants/messages';
import InputView from '../utils/Views/InputView';

class LottoController {
  async startGame() {
    const inputMoney = await InputView.readLineAsync(MESSAGE.inputMoney);
  }
}

export default LottoController;
