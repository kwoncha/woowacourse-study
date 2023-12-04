import MESSAGE from '../constants/messages';
import Validate from '../utils/Validate/Validate';
import InputView from '../utils/Views/InputView';

class LottoController {
  async startGame() {
    const inputMoney = await InputView.readLineAsync(MESSAGE.inputMoney);
    this.validate = new Validate();
    this.validate.isValidMoney(inputMoney);
  }
}

export default LottoController;
