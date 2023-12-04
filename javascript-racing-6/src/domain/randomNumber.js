import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBERS } from '../constants/constants.js';

const randomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(NUMBERS.minimum, NUMBERS.maximum);
};

export default randomNumber;
