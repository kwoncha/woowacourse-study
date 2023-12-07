import { MENU, NUMBERS, REGEXS } from '../../constants/constants.js';
import MESSAGES from '../../constants/messages.js';

const Validate = {
  isValidEventMonth(date) {
    if (!REGEXS.date.test(date)) throw new Error(MESSAGES.ERROR.notValidDate);
  },

  isValidMenu(menuArray) {
    let countedMenu = NUMBERS.zero;
    const setMenu = new Set();
    menuArray.forEach(menu => {
      if (!REGEXS.menu.test(menu)) throw new Error(MESSAGES.ERROR.notValidMenu);
    });

    menuArray.forEach(menuAndCount => {
      const [menu, count] = menuAndCount.split('-');
      setMenu.add(menu);
      countedMenu += Number(count);

      if (Number(count) < NUMBERS.minmumOrder) throw new Error(MESSAGES.ERROR.notValidMenu);

      Object.keys(MENU).forEach(type => {
        if (!menu in MENU.type) throw new Error(MESSAGES.ERROR.notValidMenu);
      });
    });

    if (countedMenu > NUMBERS.maxmumOrder || menuArray.length !== setMenu.size)
      throw new Error(MESSAGES.ERROR.notValidMenu);
  },
};

export default Validate;
