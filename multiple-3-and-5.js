// Multiples of 3 and 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const NUMBER = 1000;
let arrNumbers = [];

const isMultipleOfThreeOrFive = number => (number % 5 === 0 || number % 3 === 0) ? true : false;

for (let index = NUMBER - 1; index > 0; index--) {
  let isMultiple = isMultipleOfThreeOrFive(index);
  if (isMultiple) {
    arrNumbers.push(index)
  }
}

const totalSum = arrNumbers.reduce((previous, next) => previous + next );

console.log('Total sum:', totalSum);
