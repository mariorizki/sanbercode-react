const numbers = [1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5];

const sortArray = arr => {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(sortArray(numbers));
