import { NUMBERS } from '../constants/constants.js';
import STARDAY from '../constants/startDay.js';
import Validate from '../utils/Validate/Validate.js';

class DateHandler {
  constructor(date) {
    this.date = date;
    Validate.isValidEventMonth(date);
  }

  isWeekend(date) {
    let weekend = false;
    if (
      (date - NUMBERS.friday) % NUMBERS.week === NUMBERS.zero ||
      (date - NUMBERS.saturday) % NUMBERS.week === NUMBERS.zero
    )
      weekend = true;

    return weekend;
  }

  isStarDay(date) {
    return STARDAY.some(eventDay => date === eventDay);
  }
}

export default DateHandler;
