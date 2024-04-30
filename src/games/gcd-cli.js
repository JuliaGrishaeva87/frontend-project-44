import { getRandom } from '../index.js';

const minDiaposone = 1;
const maxDiaposone = 100;
const rule = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let modulo;
  let devider;
  let min;
  let max;
  if (num1 > num2) {
    max = num1;
    min = num2;
  } else {
    max = num2;
    min = num1;
  }
  while (max % min !== 0) {
    modulo = max % min;
    max = min;
    min = modulo;
  }
  if (max % min === 0) {
    devider = min;
  }
  return devider;
};

const playTheGameGcd = () => {
  const randomNumber1 = getRandom(minDiaposone, maxDiaposone);
  const randomNumber2 = getRandom(minDiaposone, maxDiaposone);
  const expression = `${randomNumber1} ${randomNumber2}`;
  const solution = findGcd(randomNumber1, randomNumber2).toString();
  return [expression, solution];
};

export { playTheGameGcd, rule };
