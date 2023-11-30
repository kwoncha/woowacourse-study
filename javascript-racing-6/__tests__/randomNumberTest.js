import { MissionUtils } from '@woowacourse/mission-utils';
import randomNumber from '../src/domain/randomNumber.js';

const mockRandoms = numbers => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('randomNumber 테스트', () => {
  beforeEach(() => {
    mockRandoms([5]);
  });

  it('지정된 범위 내의 숫자 반환', () => {
    const result = randomNumber();

    expect(result).toBe(5);
  });
});
