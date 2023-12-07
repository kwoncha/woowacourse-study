import { NUMBERS } from '../constants/constants.js';
import STARDAY from '../constants/startDay.js';
import Validate from '../utils/Validate/Validate.js';

class DateHandler {
  constructor(date) {
    this.date = date;
    Validate.isValidEventMonth(this.date);
  }

  isWeekend() {
    let weekend = false;
    if (
      (this.date - NUMBERS.friday) % NUMBERS.week === NUMBERS.zero ||
      (this.date - NUMBERS.saturday) % NUMBERS.week === NUMBERS.zero
    ) {
      weekend = true;
    }

    return weekend;
  }

  isStarDay() {
    return STARDAY.some(eventDay => this.date === eventDay);
  }
}

export default DateHandler;
