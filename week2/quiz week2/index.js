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
