// Soal 1
console.log('--------------SOAL 1----------------');

// makhluk ghaib class

class MakhlukGhaib {
  constructor(nama, kekuatan) {
    this.nama = nama;
    this.kekuatan = kekuatan;
  }

  attack() {
    console.log('Senyum');
  }
}

const makhlukGhaib = new MakhlukGhaib('Pocong', 'Terbang');

makhlukGhaib.attack();
console.log(makhlukGhaib);

// benda class

class Benda {
  constructor(nama, bahan, actionName) {
    this.nama = nama;
    this.bahan = bahan;
    this.actionName = actionName;
  }

  action() {
    console.log(this.actionName);
  }
}

const komporObject = new Benda('kompor', 'besi', 'memanaskan');

komporObject.action();
console.log(komporObject);

const cintaObject = new Benda('cinta', 'perjuangan,', 'membara');

console.log(cintaObject);

// inherit dari benda
class Rumah extends Benda {
  constructor(nama, bahan, actionName, dasar) {
    super(nama, bahan, actionName);
    this.dasar = dasar;
  }

  iniActionLain() {
    console.log('Ini action lain');
  }
}

const rumah = new Rumah('rumah', 'kayu', 'melindungi', 'kebersamaan');

console.log(rumah);
rumah.action();
rumah.iniActionLain();
