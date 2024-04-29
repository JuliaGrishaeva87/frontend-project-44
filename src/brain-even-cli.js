import readlineSync from 'readline-sync';

const minDiaposone = 1;
const maxDiaposone = 1000;

const getRandomNumber = (min, max) => {
  const gettingNumber = Math.floor(Math.random() * (max - min)) + min;
  return gettingNumber;
};

const checkNumber = (number) => {
  let rightAnswer = 'no';
  if (number % 2 === 0) {
    rightAnswer = 'yes';
  }
  return rightAnswer;
};

const playTheGameEven = (name) => {
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = getRandomNumber(minDiaposone, maxDiaposone);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const checkedNumber = checkNumber(randomNumber);
    if (userAnswer !== checkedNumber) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${checkedNumber}"`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export default playTheGameEven;
