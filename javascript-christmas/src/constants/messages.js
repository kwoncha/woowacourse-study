import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const PREFIX = '[ERROR]';

const DISCOUNTDETAIL = Object.freeze({});

const MESSAGES = deepFreeze({
  start: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.\n',
  inputDate: '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n',
  inputMenu:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n',
  event: '12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!',
  orderedMenu: '\n<주문 메뉴>',
  menuDtail: (menu, count) => `${menu} ${count}개`,
  beforeDiscount: '\n<할인 전 총주문 금액>',
  orderedAmount: amount => `${amount}원`,
  giftMenu: '\n<증정 메뉴>',
  giftDetail: amount => (amount !== 0 ? '샴페인 1개' : '없음'),
  discountList: '\n<혜택 내역>',
  nothing: '없음',
  ERROR: {
    notValidDate: `${PREFIX} 유효하지 않은 날짜입니다.다시 입력해 주세요.`,
    notValidMenu: `${PREFIX} 유효하지 않은 주문입니다.다시 입력해 주세요.`,
  },
});

export default MESSAGES;
