import getRandom from '../utils.js';

const minDiaposone = 1;
const maxDiaposone = 10;
const operators = ['+', '-', '*'];
const rule = 'What is the result of the expression?';

const checkAnswer = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown value: '${number1} or ${operator} or ${number2}'!`);
  }
};

const playTheGameCalc = () => {
  const randomNumber1 = getRandom(minDiaposone, maxDiaposone);
  const randomNumber2 = getRandom(minDiaposone, maxDiaposone);
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  const expression = `${randomNumber1} ${randomOperator} ${randomNumber2}`;
  const solution = checkAnswer(randomNumber1, randomOperator, randomNumber2).toString();
  return [expression, solution];
};

export { playTheGameCalc, rule };
