import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const REGEXS = Object.freeze({
  money: /^([1-9]\d*000)$/,
  winningNumbers: /^(?:\b([1-9]|[1-3][0-9]|4[0-5])\b,?){6}$/,
  bonusNumber: /^(?:[1-9]|[1-3][0-9]|4[0-5])$/,
});

const NUMBERS = deepFreeze({
  randomMin: 1,
  randomMax: 45,
  randomNumber: 6,
  lottoPrice: 1000,
});

export { REGEXS, NUMBERS };
