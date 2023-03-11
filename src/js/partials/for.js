export const sumOfAllNumbers = () => {
  target = prompt('Enter any number');
  let sum = 0;

  for (let i = 0; i <= target; i += 1) {
    sum += i;
  }

  return `Summ of all numbers from 0 to your number = ${sum} `;
};
