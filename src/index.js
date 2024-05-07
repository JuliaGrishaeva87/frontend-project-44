import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const playTheGame = (rule, generator) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);
  for (let i = 0; i < numberOfRounds; i += 1) {
    const [question, solution] = generator();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== solution) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${solution}"`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playTheGame;
