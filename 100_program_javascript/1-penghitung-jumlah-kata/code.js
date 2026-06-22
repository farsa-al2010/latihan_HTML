var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var kata = teks.trim().split(/\s+/).filter(function(x){ return x != ""; });
  hasil.textContent = "Jumlah kata: " + kata.length;
};
