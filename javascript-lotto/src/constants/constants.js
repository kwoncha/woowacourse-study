import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const REGEXS = Object.freeze({
  money: /^([1-9]\d*000)$/,
});

const NUMBERS = deepFreeze({
  randomMin: 1,
  randomMax: 45,
  randomNumber: 6,
  lottoPrice: 1000,
});

export { REGEXS, NUMBERS };
