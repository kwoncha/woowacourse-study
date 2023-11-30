import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const REGEXS = deepFreeze({
  userName: /^ ([a - zA - Z]{ 1, 5})(, [a - zA - Z]{ 1, 5}) * $ /,
  playTime: /^\d+$/,
});

const NUMBERS = deepFreeze({
  minimum: 0,
  maximum: 9,
  go: 4,
});

export { REGEXS, NUMBERS };
