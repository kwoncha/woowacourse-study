import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGES from '../../constants/messages.js';

const OutputView = {
  print(text) {
    MissionUtils.Console.print(text);
  },

  discountList(list) {
    this.print(MESSAGES.beforeDiscount);
    this.print(MESSAGES.orderedAmount(this.formatNumberToCurrency(list.orderedAmount)));
    this.print(MESSAGES.beforeDiscount);
    this.print();
  },

  printOrderedMenu(list) {
    this.print(MESSAGES.orderedMenu);
    Object.keys(list).forEach(type => {
      Object.keys(type).forEach(menu => {
        this.print(MESSAGES.menuDtail(menu, list[type][menu]));
      });
    });
  },

  formatNumberToCurrency(number) {
    return number.toLocaleString('ko-KR');
  },
};

export default OutputView;
