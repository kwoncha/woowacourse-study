import { MissionUtils } from '@woowacourse/mission-utils';
import MESSAGE from '../../constants/messages.js';

const OutputView = {
  print(text) {
    MissionUtils.Console.print(text);
  },

  printWinningStatistics(prizes, profit) {
    this.print(MESSAGE.result);
    this.print(MESSAGE.split);

    const sortedKeys = Object.keys(prizes).sort();
    sortedKeys.forEach(key => {
      const prizeInfo = prizes[key];
      const prizeCount = prizeInfo.count;
      const prizeAmount = prizeInfo.prize.toLocaleString('ko-KR');
      this.print(MESSAGE.prizeText(key, prizeAmount, prizeCount));
    });

    this.print(MESSAGE.profit(profit));
  },
};

export default OutputView;
