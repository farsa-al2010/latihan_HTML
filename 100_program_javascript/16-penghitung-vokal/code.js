var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var cocok = teks.toLowerCase().match(/[aiueo]/g);
  hasil.textContent = "Jumlah vokal: " + (cocok ? cocok.length : 0);
};
