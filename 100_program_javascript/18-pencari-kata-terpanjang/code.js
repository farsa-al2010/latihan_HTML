var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var kata = teks.trim().split(/\s+/);
  var panjang = "";
  for (var i = 0; i < kata.length; i++) if (kata[i].length > panjang.length) panjang = kata[i];
  hasil.textContent = panjang == "" ? "Belum ada kata" : panjang;
};
