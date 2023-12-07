import { DESSERT, MAIN, MENU, NUMBERS } from '../constants/constants.js';

class DiscountHandler {
  #discountList = {
    discountAmount: NUMBERS.zero,
    christmasDiscount: NUMBERS.zero,
    weekendDiscount: NUMBERS.zero,
    weekdayDiscount: NUMBERS.zero,
    starDayDiscount: NUMBERS.zero,
    giftDiscount: NUMBERS.zero
  };

  constructor(date, weekend, starDay, orderedMenu) {
    this.date = date;
    this.weekend = weekend;
    this.starDay = starDay;
    this.orderedMenu = orderedMenu;
  }

  getprocessDiscounts() {
    const orderedAmount = this.calculateOrderTotal()
    this.applyChristmasDday();
    this.applyWeekdayAndWeekendDiscount();
    this.applyStarDayDiscount();
    this.applyGiftDiscount(orderedAmount);

    return this.#discountList;
  }

  calculateOrderTotal() {
    let amount = 0;

    Object.keys(this.orderedMenu).forEach(type => {
      Object.keys(type).forEach(menu => {
        amount += MENU[type][menu] * this.orderedMenu[type][menu];
      });
    });

    return amount;
  }

  applyChristmasDday() {
    if (this.date <= NUMBERS.maxday) {
      this.#discountList.christmasDiscount += NUMBERS.thousand + (this.date - NUMBERS.one) * NUMBERS.onedayDiscount
    }
  }

  applyWeekdayAndWeekendDiscount() {
    if (this.weekend) {
      const weekendDiscount = this.calculateCategoryDiscount(MAIN, NUMBERS.weekendDiscount);
      this.#discountList.weekendDiscount += weekendDiscount;
      this.#discountList.discountAmount += weekendDiscount;
    } else {
      const weekdayDiscount = this.calculateCategoryDiscount(DESSERT, NUMBERS.weekdayDiscount);
      this.#discountList.weekdayDiscount += weekdayDiscount;
      this.#discountList.discountAmount += weekdayDiscount;
    }
  }

  calculateCategoryDiscount(category, discountPerItem) {
    return Object.keys(this.orderedMenu[category]).reduce((discount, menuName) => {
      return discount + this.orderedMenu[category][menuName] * discountPerItem;
    }, NUMBERS.zero);
  }

  applyStarDayDiscount() {
    if (this.starDay) {
      this.#discountList.discountAmount += NUMBERS.thousand;
      this.#discountList.starDayDiscount += NUMBERS.thousand;
    }
  }

  applyGiftDiscount(orderedAmount) {
    if (orderedAmount >= NUMBERS.minimumGift) {
      this.#discountList.discountAmount += NUMBERS.gift;
      this.#discountList.giftDiscount += NUMBERS.gift;
    }
  }
}

export default DiscountHandler;
