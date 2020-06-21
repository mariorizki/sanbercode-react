const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];

const filteredNumbers = numbers.filter(n => n % 2 === 0);
const sumOfEvenNumber = filteredNumbers.reduce((a, b) => a + b, 0);

console.log(filteredNumbers, sumOfEvenNumber);
