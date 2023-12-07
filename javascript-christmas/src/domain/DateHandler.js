import STARDAY from '../constants/startDay.js';
import Validate from '../utils/Validate/Validate.js';

class DateHandler {
  constructor(date) {
    this.date = date;
    Validate.isWeekend(date);
  }

  isWeekend(date) {
    let weekend = false;
    if ((date - 1) % 7 === 0 || (date - 2) % 7 === 0) weekend = true;

    return weekend;
  }

  isStarDay(date) {
    return STARDAY.some(eventDay => date === eventDay);
  }
}

export default DateHandler;
