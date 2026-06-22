var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Air bisa membeku jadi es.","Matahari adalah bintang.","JavaScript bisa jalan di browser.","HTML bukan bahasa pemrograman."];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
