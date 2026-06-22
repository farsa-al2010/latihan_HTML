var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var kata = teks.trim().split(/\s+/).filter(function(x){ return x != ""; });
  var pendek = kata[0] || "";
  for (var i = 0; i < kata.length; i++) if (kata[i].length < pendek.length) pendek = kata[i];
  hasil.textContent = pendek == "" ? "Belum ada kata" : pendek;
};
