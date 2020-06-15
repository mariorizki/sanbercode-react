// Soal 1 -------------------------------------------------

// Pada code di bawah ini terdapat sebuah object “sebuahObject” yang memiliki elemen sebuah fungsi, tuliskan code Anda untuk membuat console mengeluarkan log “Hai Dunia Kucing!!” dengan mengakses fungsi tersebut ? Jelaksan!

const sebuahObject = {
  fungsi: () => {
    console.log('Hai Dunia Kucing!!');
  }
};

// Jawaban
sebuahObject.fungsi();

// Soal 2 -------------------------------------------------

// Perhatikan code  di bawah ini.

let sebuahVariabel = 'apple';
sebuahVariabel = 'orange'; // SyntaxError: Identifier 'sebuahVariabel ' has already been declared
console.log(sebuahVariabel);

// Pada line kedua code di atas akan memunculkan error bahwa variabel “sebuahVariabel ” sudah dideklarasikan dengan let, tidak dapat dideklarasikan kembali.

var sebuahVariabel2 = 'apple';
var sebuahVariabel2 = 'orange';
console.log(sebuahVariabel);

// Namun, jelaskan kenapa ketika kita ganti let dengan var seperti code di atas ini, tidak ada error yang terjadi!

// Jawaban
/*
    let dan var memiliki sifat yang berbeda, ketika mendeklarsikan variabel dengan var, berarti kita membuat sebuah variabel
    yang sifatnya global (tidak block scope). Var jika sudah didekalarasikan dapat di-redeclare. Dalam var juga berlaku hoisting (diangkat)
    misal: 
    a = 1;
    var a
    console.log(a) // akan menghasilkan 1

    Sedangkat let tidak mengizinkan kita untuk melakukan redeclare variabel dan let memiliki sifat block scope dan 
    tidak berlaku hoisting. Namun, untuk let kita tetap bisa melakukan reassign variabelnya.
    contoh: 
    let a = 1;
    a = 2;
    console.log(a) // akan menghasilkan 2
*/

// Soal 3 --------------------------------------------------------------------------------
// Jelaskan, jika memang const membuat sebuah variable tidak bisa di-assign kembali valuenya, kenapa pada code di bawah ini, masih tetap berlaku ?

const sebuahVariabel3 = {};
sebuahVariabel3.color = 'red';

// Jawaban
// Meskipun const merupakan variabel yang memiliki nilai tetap dan tidak bisa di-reassign, values dan properties dalam sebuah
// objek bisa diubah, karena dalam JavaScript, object bersifat mutable (dapat diubah) meskipun dideklarsikan dengan const.

// Soal 4 ---------------------------------------------------------------
// Pada code di bawah ini, kenapa console memberikan output undefined ?
var haloHalo = 1;
var haloHaloBandung = function() {
  console.log(haloHalo);
  var haloHalo = 2;
};
haloHaloBandung();

// Jawaban
// Output menghasilkan undefined karena redeclaration yang dilakukan setelah eksekusi dengan console.log(haloHalo). Nilainya sebenarnya sudah berubah karena redclaration dalam scope/block function tersebut,
// seperti yang dijelaskan di awal, eksekusinya mendahului redeclaration.
// Hal tersebut bisa dibuktikan dengan code di bawah:

var haloHalo2 = 1;
var haloHaloBandung2 = function() {
  var haloHalo2 = 2;
  console.log(haloHalo2);
};
haloHaloBandung2(); // output akan menghasilkan 2;

// Atau agar lebih jelas dapat dibuktikan dengan melakukan console.log dua kali (sebelum dan setelah var di-redeclaration)

var haloHalo3 = 1;
var haloHaloBandung3 = function() {
  console.log(haloHalo3);
  var haloHalo3 = 2;
  console.log(haloHalo3);
};
haloHaloBandung3();
