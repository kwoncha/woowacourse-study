import MESSAGES from '../constants/messages.js';
import DateHandler from '../domain/DateHandler.js';
import DiscountHandler from '../domain/DiscountHandler.js';
import MenuHandler from '../domain/MenuHandler.js';
import InputView from '../utils/Views/InputView.js';
import OutputView from '../utils/Views/OutputView.js';

class ChristmaEventController {
  async startChristmasEvent() {
    OutputView.print(MESSAGES.start);
    const [date, weekend, starDay] = await this.getReservationDate();
    const orderedMenu = await this.getReservationOrder();
    const discountHandler = new DiscountHandler(date, weekend, starDay, orderedMenu);
    const discountList = discountHandler.getprocessDiscounts();
    OutputView.printOrderedMenu(orderedMenu);
    OutputView.discountList(discountList);
  }

  async getReservationDate() {
    const inputedDate = await InputView.readLineAsync(MESSAGES.inputDate);

    try {
      const dateHandler = new DateHandler(inputedDate);
      const weekend = dateHandler.isWeekend();
      const starDay = dateHandler.isStarDay();

      return [Number(inputedDate), weekend, starDay];
    } catch (error) {
      OutputView.print(error.message);

      return this.getReservationDate();
    }
  }

  async getReservationOrder() {
    const inputOrder = await InputView.readLineAsync(MESSAGES.inputMenu);

    try {
      const menuHandler = new MenuHandler(inputOrder);
      const orderedMenu = menuHandler.getOrderedMenu();

      return orderedMenu;
    } catch (error) {
      OutputView.print(error.message);

      return this.getReservationOrder();
    }
  }
}

export default ChristmaEventController;
