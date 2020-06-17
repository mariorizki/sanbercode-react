// Soal 1
console.log('----------------SOAL 1----------------');

const arraySatu = [1, 2, 3, 4];
const arrayDua = [5, 6, 7, 8];
const arrayTiga = [9, 10, 11, 12];
const arrayEmpat = [13, 14, 15, 16];

// concat
const mergedArray1 = arraySatu.concat(arrayDua, arrayTiga, arrayEmpat);

console.log(mergedArray1);

// spread
const mergedArray2 = [...arraySatu, ...arrayDua, ...arrayTiga, ...arrayEmpat];

console.log(mergedArray2);

// Concat lebih performance-wise jika kita ingin menggambungkan array dalam jumlah yang sangat banyak,
// spread juga akan menimbulkan masalah jika kita menggabungkannya array dengan string karena spread menganggap
// string sebagai array
// contoh:
// a = [1, 2, 3]
// x = 'hello';

// console.log(a.concat(x));  // [ 1, 2, 3, 'hello' ]
// console.log([...a, ...x]); // [ 1, 2, 3, 'h', 'e', 'l', 'l', 'o' ]

// Namun dalam konteks code yang lebih readable, menurut saya spread lebih baik dari concat.

// Soal 2
console.log('----------------SOAL 2----------------');

const objectBebas = {
  aspal: 'hitam',
  roket: 'meluncur',
  joker: 'villain',
  unta: 'arab',
  ninja: 'hatori'
};

const { aspal: a, roket: r, joker: j, unta: u, ninja: n } = objectBebas;

console.log(a, r, j, u, n);

// soal 3
console.log('----------------SOAL 3----------------');

const unfilteredArray = [
  {
    name: 'Bejo',
    isAllowed: true
  },
  {
    name: 'Jhonson',
    isAllowed: false
  },
  {
    name: 'Juara',
    isAllowed: true
  },
  {
    name: 'Panco',
    isAllowed: false
  },
  {
    name: 'Nasional',
    isAllowed: true
  }
];

const bejoJuaraNasional = unfilteredArray.filter(x => x.isAllowed === true);

console.log(bejoJuaraNasional);
console.log(bejoJuaraNasional.map(x => x.name));
