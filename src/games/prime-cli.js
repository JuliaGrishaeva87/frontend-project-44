import getRandom from '../utils.js';

const minDiaposone = 1;
const maxDiaposone = 50;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num >= 2) {
    for (let i = 2; i < num; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  } return false;
};

const playTheGamePrime = () => {
  const randomNumber = getRandom(minDiaposone, maxDiaposone);
  const solution = isPrime(randomNumber) ? 'yes' : 'no';
  const expression = randomNumber;
  return [expression, solution];
};

export { playTheGamePrime, rule };
