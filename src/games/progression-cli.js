import getRandom from '../utils.js';

const minDiaposone = 1;
const maxDiaposone = 50;
const rule = 'What number is missing in the progression?';

const makeProgression = (num1, num2) => {
  const arrProgression = [num1, num2];
  const difference = num2 - num1;
  const numberOfelements = getRandom(5, 10);
  let secondElement = num2;
  for (let i = 2; i <= numberOfelements; i += 1) {
    const elementOfProgression = secondElement + difference;
    arrProgression.push(elementOfProgression);
    secondElement = elementOfProgression;
  }
  return arrProgression;
};

const playTheGameProgression = () => {
  const randomNumber1 = getRandom(minDiaposone, maxDiaposone);
  const randomNumber2 = getRandom(minDiaposone, maxDiaposone);
  const progression = makeProgression(randomNumber1, randomNumber2);
  const randomIndex = getRandom(0, progression.length - 1);
  const solution = progression.splice(randomIndex, 1, '..').toString();
  const expression = progression.join(' ');
  return [expression, solution];
};

export { playTheGameProgression, rule };
