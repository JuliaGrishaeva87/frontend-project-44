import { getRandom } from '../index.js';

const minDiaposone = 1;
const maxDiaposone = 50;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const playTheGamePrime = () => {
  const randomNumber = getRandom(minDiaposone, maxDiaposone);
  const solution = isPrime(randomNumber);
  const expression = randomNumber;
  return [expression, solution];
};

export { playTheGamePrime, rule };
