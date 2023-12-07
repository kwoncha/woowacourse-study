import Validate from "../utils/Validate/Validate.js";
import { MENU, NUMBERS } from "../constants/constants.js";

class MenuHandler {
  #orderedMenu

  constructor(menu) {
    this.menu = menu.split(',');
    Validate.isValidMenu(this.menu);
    this.#createOrderObjects(this.menu);
  }

  #createOrderObjects(menuArray) {
    menuArray.forEach(menuAndCount => {
      const [menu, count] = menuAndCount.split('-');

      Object.keys(MENU).forEach(type => {
        if (menu in MENU[type]) {
          this.#orderedMenu[type][menu] += Number(count);
        }
      })
    });
  }

  getOrderedMenu() {
    return this.#orderedMenu;
  }
}

export default MenuHandler;
