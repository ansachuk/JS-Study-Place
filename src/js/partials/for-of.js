export const numbers = [1, 17, 23, 2, 14, 76, 3];

export const sumOfArray = function (array) {
  let sum = 0;

  for (let el of array) {
    if (el % 2 === 0) {
      sum += el;
    }
  }

  return `Sum of even elements of array = ${sum}`;
};
