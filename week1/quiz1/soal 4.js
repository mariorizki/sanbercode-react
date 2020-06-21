const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];

const sumOfEvenNumber = numbers
  .filter(n => n % 2 === 0)
  .reduce((a, b) => a + b, 0);

const sortedNumbers = numbers.sort((a, b) => a - b);

console.log(
  `Jumlah array genap = ${sumOfEvenNumber}, array yang diurutkan = ${sortedNumbers}`
);
