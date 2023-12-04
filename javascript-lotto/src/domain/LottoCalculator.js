import { NUMBERS, PRIZE, PRIZEMONEY } from "../constants/constants.js";

class LottoCalculator {
  #prizes = {
    [PRIZE.fifth]: { prize: PRIZEMONEY.fifth, count: NUMBERS.zero },
    [PRIZE.fourth]: { prize: PRIZEMONEY.fourth, count: NUMBERS.zero },
    [PRIZE.third]: { prize: PRIZEMONEY.third, count: NUMBERS.zero },
    [PRIZE.second]: { prize: PRIZEMONEY.second, count: NUMBERS.zero },
    [PRIZE.first]: { prize: PRIZEMONEY.first, count: NUMBERS.zero },
  };

  constructor(purchasedLottos, winningNumbers, bonusNumber) {
    this.purchasedLottos = purchasedLottos;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
  }

  #calculatePrizes() {
    this.purchasedLottos.forEach(lotto => {
      const matchingNumbers = lotto.filter(number => this.winningNumbers.includes(number));
      const matchingCount = matchingNumbers.length;

      if (matchingCount === PRIZE.third && ticket.includes(this.bonusNumber)) {
        this.#prizes[PRIZE.second].count++;
      }
      if (matchingCount === PRIZE.fifth || (matchingCount === PRIZE.third && !lotto.includes(this.bonusNumber))) {
        this.#prizes[matchingCount].count++;
      }
    });
  }

  #calculateTotalRevenue() {
    this.#calculatePrizes();
    let totalRevenue = NUMBERS.zero;

    for (const key in this.#prizes) {
      totalRevenue += this.#prizes[key].prize * this.#prizes[key].count;
    }

    return totalRevenue;
  }

  calculateProfit(purchaseAmount) {
    const totalRevenue = this.#calculateTotalRevenue();
    const profit = (totalRevenue / purchaseAmount) * NUMBERS.percentage;

    return profit.toFixed(NUMBERS.one);
  }

  getPrizes() {
    return this.#prizes;
  }
}

export default LottoCalculator;
