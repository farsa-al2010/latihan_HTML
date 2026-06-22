var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Si Cepat","Bang Coding","Anak Debug","Kopi Dingin","Raja Tugas","Ninja HTML","Cah JavaScript","Mas Console"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
