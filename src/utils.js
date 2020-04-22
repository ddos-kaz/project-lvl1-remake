const generateRandomNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));
const isEven = (number) => number % 2 === 0;


export { generateRandomNumber, isEven };
