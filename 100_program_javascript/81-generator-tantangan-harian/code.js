var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Rapikan meja belajar.","Belajar JS 20 menit.","Baca 5 halaman buku.","Minum air putih lebih banyak."];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
