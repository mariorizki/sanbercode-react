// Soal 1 ---------------------------------------------------------------------
/*
    Pengertian this keyword:
    Secara sederhana, this mengacu pada sebuah object yang memilikinya atau objek yang menjadi parent-nya (yang berada di scope di dalamnya).
    Jika kita melakukan console.log(this), itu akan merefer/mengacu pada window object. Namun jika this berada
    di dalam object yang kita buat, this akan mengacu pada objek tersebut.
*/
// Contoh:
const myObject = {
  name: 'Mario',
  objectMethod: function() {
    console.log(this.name);
  } // this.name tersebut akan mengacu pada property name yang berada pada myObject
};

myObject.objectMethod();

// Soal 2 ---------------------------------------------------------------------

const getNamaLengkap = (namaDepan, namaBelakang) => {
  return `${namaDepan} ${namaBelakang}`;
};

const getNamaDepan = namaLengkap => {
  return namaLengkap.split(' ')[0];
};

const consoleHai = () => {
  console.log('hai', getNamaLengkap('Mario', 'Rizki'));
};

consoleHai();

// Soal 3 -------------------------------------------------------------------------

const sebuahObject = {
  name: 'Bejo Jhonson',
  getName() {
    return this.name;
  }
};

const sebuahObjectLain = {
  name: 'Bejo Jhonson',
  getName: () => sebuahObjectLain.name
};

console.log(sebuahObject.getName());
console.log(sebuahObjectLain.getName());

// Pada object sebuahObjectLain, this perlu dihilangkan karena menggunakan arrow function (arrow function mengikat/bind secara langsung ke object-nya)
// dan menggantinya dengan merujuk langsung ke property name pada object sebuahObjectLain

// Soal 4 ---------------------------------------------------------------------------------

const profil = {
  namaDepan: 'Bejo',
  namaBelakang: 'Jhonson',
  getName() {
    this.name = `${this.namaDepan} ${this.namaBelakang}`;
    return this.name;
  }
};

console.log(profil.getName());

/*  
    Code di atas dapat berjalan dengan benar.
    Yang terjadi adalah pada property function/method getName pada objek profil, method tersebut mengembalikan nilai
    yang berupa string yang gabungan dari value property namaDepan dan property namaBelakang pada objek profil.
    
    this.name pada method getName sebenarnya sama saja dengan variabel declaration yang isinya value dari
    property namaDepan dan namaBelakang.
    Untuk membuktikannya kita dapat mengganti name dengan;

    getName() {
        const name = `${this.namaDepan} ${this.namaBelakang}`;
        return name;
    }

    hasilnya method getName akan mengembalikan nilai yang sama karena pada dasarnya this.name tersebut adalah 
    variable declaration.
*/
