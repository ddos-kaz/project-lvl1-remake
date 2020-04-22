import { cons } from 'hexlet-pairs';
import { generateRandomNumber, isEven } from '../utils';
import gameFlowProcess from '../gameFlow';


const FLOOR_OF_RANDOM_NUMBER = 1;
const CEIL_OF_RANDOM_NUMBER = 1000;

const gameFunction = () => {
  const randomNumber = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
  const question = `${randomNumber}`;
  const systemAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return cons(question, systemAnswer);
};

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const brainEven = () => gameFlowProcess(gameDescription, gameFunction);

export default brainEven;
