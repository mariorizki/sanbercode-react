// Soal 2

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
