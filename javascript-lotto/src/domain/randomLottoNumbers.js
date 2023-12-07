import { MissionUtils } from '@woowacourse/mission-utils';
import { NUMBERS } from '../constants/constants.js';

const randomLottoNumbers = () => {
  return MissionUtils.Random.pickUniqueNumbersInRange(
    NUMBERS.randomMin,
    NUMBERS.randomMax,
    NUMBERS.randomNumber,
  );
};

export default randomLottoNumbers;
