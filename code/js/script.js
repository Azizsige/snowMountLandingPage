// membuat list baru

// tangkap parent
const ul = document.querySelector('.navbar-nav');
// buat element li
const liBaru = document.createElement('li');
// buat element a
const aBaru = document.createElement('a');
// buat isi node a
const teksAbaru = document.createTextNode('Contact');
// masukkan isi node ke element yg dibuat
aBaru.appendChild(teksAbaru);
// masukkan isi node ke element g dibuat
liBaru.appendChild(aBaru);
// masukkan li dan a baru ke dalam ul nya
ul.prepend(liBaru);

// akhir membuat list baru

// kasih class
// untuk li
liBaru.setAttribute('class', 'nav-item');
// unukk a
aBaru.setAttribute('class', 'nav-link');
aBaru.setAttribute('href', '#');
// end of kasih class