//  Soal 1
// State pada dasarnya adalah data "internal" atau sebuah informasi yang dimiliki sebuah komponen yang dapat diubah-ubah.
// Sebuah state sebaiknya tidak diubah secara eksplisit karena react tidak akan mendeteksi perubahan yang terjadi.

//  Soal 2
// Props vs State
// Props bersifat read-only atau tidak dapat diubah nilainya, sedangkan state bersifat mutable atau nilainya dapat diubah
// Props digunakan untuk berkomunikasi antara satu komponen ke komponen lain, sedangkan state dimiliki khusus oleh komponen yang dimana dia deklarasikan.

// Soal 3
// Mengubah state seperti itu mungkin nilainya berubah namun tidak akan mempengaruhi DOM-nya.
// Untuk mengatasinya, react memiliki method untuk mengubah nilai dari state yaitu dengan setState
// this.setState({ counter: this.state.counter + 1})

// Soal 4
// Virtual DOM berbeda dengan DOM asli, ketika ada perubahan UI yang terjadi, Virtual DOM akan menganalisa perubahan yang terjadi
// kemudian mencari cara terbaik untuk mengubah DOM asli secara efisien. Virtual DOM akan menangkap perubahan yang terjadi dan hanya
//  mengubah apa yang dibutuhkan saja lalu kemudian mengupdate DOM yang asli, hal ini yang membuat react sangat baik performanya sebagai JavaScript library.

// Soal 5
// React Lifecycle secara garis besar terbagi menjadi 4 fase
// 1. initialization
//      fase dimana sebuah komponen memulai perjalanannya dengan men-setup state dan propsnya yang biasa terjadi di constructor
// 2. mounting
//      sesuai dengan namanya, mounting adalah fase dimana sebuah komponen terpasang pada DOM
//      fase mounting memiliki beberapa method
//      2.1 componentWillMount
//      method ini terpanggil sebelum komponen terpasang ke DOM
//      2.2 componentDidMount
//      method ini terpanggil setelah komponen terpasang ke DOM
// 3. updating
//      fase ketiga ini terjadi ketika sebuah state pada komponen berubah dan posisi dimana re-rendering terjadi
//      berikut adalah method pada fase ini
//      3.1 shouldComponentUpdate
//      method ini menentukan apakah sebuah komponen mesti di-update atau tidak. Secara default, nilainya adalah true
//      3.2 componentWillUpdate
//      method ini terjadi sebelum sebuah komponen melakukan re-rendering terhadap perubahan
//      3.3 componentDidUpdate
//      method ini terjadi setelah sebuah komponen melakukan re-rendering terhadap perubahan
//  4. unmounting
//      fase ini terjadi ketika sebuah komponen "terlepas" dari DOM, fase ini memiliki method bernama component will unmount

// Soal 6
// Sebenernya tidak ada sebuah strict rule yang dibuat react untuk mengubah state secara langsung di constructor, namun akan menghasilkan
// perliaku yang tidak diharapkan ketika perubahan tersebut di=trigger pada tempat yang semestinya.
