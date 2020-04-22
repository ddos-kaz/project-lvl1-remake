import { cons } from 'hexlet-pairs';
import { generateRandomNumber } from '../utils';
import gameFlowProcess from '../gameFlow';

const FLOOR_OF_RANDOM_NUMBER = 1;
const CEIL_OF_RANDOM_NUMBER = 100;
const operations = ['+', '-', '*'];
const operationFunctions = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
};

const gameFunction = () => {
  const randomOperationNumber = generateRandomNumber(0, 2);
  const firstRandomNumber = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
  const secondRandomNumber = generateRandomNumber(FLOOR_OF_RANDOM_NUMBER, CEIL_OF_RANDOM_NUMBER);
  const randomOperation = operations[randomOperationNumber];

  const question = `${firstRandomNumber} ${randomOperation} ${secondRandomNumber}`;
  const systemAnswer = operationFunctions[randomOperation](firstRandomNumber, secondRandomNumber);

  return cons(question, systemAnswer);
};

const gameDescription = 'What is the result of the expression?';

const brainCalc = () => gameFlowProcess(gameDescription, gameFunction);

export default brainCalc;
