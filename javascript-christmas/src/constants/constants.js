import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const REGEXS = Object.freeze({
  date: /^(0?[1-9]|[12][0-9]|3[01])$/,
  menu: /^[가-힣]+-\d+$/,
});

const DESSERT = 'dessert';
const MAIN = 'main';

const NUMBERS = Object.freeze({
  minmumOrder: 1,
  maxmumOrder: 20,
  zero: 0,
  friday: 1,
  saturday: 2,
  week: 7,
  maxday: 25,
  thousand: 1000,
  onedayDiscount: 100,
  one: 1,
  allDayDiscount: 2023,
  minimumGift: 120000,
  gift: 25000,
});

const MENU = deepFreeze({
  appetizer: {
    양송이수프: 6000,
    타파스: 5500,
    시저샐러드: 8000,
  },
  main: {
    티본스테이크: 55000,
    바비큐립: 54000,
    해산물파스타: 35000,
    크리스마스파스타: 25000,
  },
  dessert: {
    초코케이크: 15000,
    아이스크림: 5000,
  },
  drink: {
    제로콜라: 3000,
    레드와인: 60000,
    샴페인: 25000,
  },
});

export { REGEXS, MENU, NUMBERS, DESSERT, MAIN };
