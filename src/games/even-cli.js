import getRandom from '../utils.js';

const minDiaposone = 1;
const maxDiaposone = 1000;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const playTheGameEven = () => {
  const randomNumber = getRandom(minDiaposone, maxDiaposone);
  const solution = isEven(randomNumber) ? 'yes' : 'no';
  const expression = randomNumber;
  return [expression, solution];
};

export { playTheGameEven, rule };
