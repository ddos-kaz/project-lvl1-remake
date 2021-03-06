import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!\n');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}`);
};

const isEven = (number) => number % 2 === 0;

const generateRandomNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));

const brainEven = () => {
  const FLOOR_OF_RANDOM_NUMBER = 1;
  const CEIL_OF_RANDOM_NUMBER = 1000;
  const GAME_ROUND_CEIL = 5;


  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);

  let round = 1;
  const ceil = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, GAME_ROUND_CEIL);

  while (round <= ceil) {
    const randomNumber = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
    console.log(`Quesion: ${randomNumber}`);
    const systemAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === systemAnswer) {
      console.log('Correct');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${systemAnswer}'.`);
      console.log(`Let's try again, ${userName}!\n`);
      break;
    }
    if (round === GAME_ROUND_CEIL) {
      console.log(`Congratulations, ${userName}!\n`);
    }
    round += 1;
  }
};

export { getUserName, brainEven };
