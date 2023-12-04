const REGEXS = Object.freeze({
  money: /^([1-9]\d*000)$/,
  number: /^(?:[1-9]|[1-3][0-9]|4[0-5])$/,
});

const NUMBERS = Object.freeze({
  randomMin: 1,
  randomMax: 45,
  randomNumber: 6,
  lottoPrice: 1000,
  lottoLength: 6,
  one: 1,
  percentage: 100,
  zero: 0,
});

const PRIZEMONEY = Object.freeze({
  first: 2000000000,
  second: 30000000,
  third: 1500000,
  fourth: 50000,
  fifth: 5000,
});

const PRIZE = Object.freeze({
  first: 6,
  second: 5.1,
  third: 5,
  fourth: 4,
  fifth: 3,
});

export { REGEXS, NUMBERS, PRIZEMONEY, PRIZE };
