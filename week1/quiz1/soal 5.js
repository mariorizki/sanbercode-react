const reverseWithoutE = str => {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== 'e' && str[i] !== 'E') {
      result += str[i];
    }
  }

  return result;
};

console.log(reverseWithoutE('Rever_1_Test_2'));
