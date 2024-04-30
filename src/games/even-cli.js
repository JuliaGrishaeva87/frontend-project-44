import { getRandom } from '../index.js';

const minDiaposone = 1;
const maxDiaposone = 1000;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const checkNumber = (number) => {
  let rightAnswer = 'no';
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  }
  return rightAnswer;
};

const playTheGameEven = () => {
  const randomNumber = getRandom(minDiaposone, maxDiaposone);
  const checkedNumber = checkNumber(randomNumber);
  return [randomNumber, checkedNumber];
};

export { playTheGameEven, rule };
