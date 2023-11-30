import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBERS } from '../constants/constants.js';

const randomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(NUMBERS.minimun, NUMBERS.maximun);
};

export default randomNumber;
