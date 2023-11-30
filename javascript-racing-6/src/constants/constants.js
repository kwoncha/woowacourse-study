import deepFreeze from '../utils/deepFreeze/deepFreeze.js';

const REGEXS = deepFreeze({
  userName: /^ ([a - zA - Z]{ 1, 5})(, [a - zA - Z]{ 1, 5}) * $ /,
  playTime: /^\d+$/,
});

export { REGEXS };
