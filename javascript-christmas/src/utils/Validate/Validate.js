import { REGEX } from "../../constants/constants.js";
import MESSAGES from "../../constants/messages.js";

const Validate = () => {
  isValidEventMonth(date) {
    if (!REGEX.test(date)) throw new Error(MESSAGES.ERROR.notValidDate)
  },
};

export default Validate;
