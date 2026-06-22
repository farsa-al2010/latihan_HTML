var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var paragraf = teks.split(/\n\s*\n/).filter(function(x){ return x.trim() != ""; });
  hasil.textContent = "Jumlah paragraf: " + paragraf.length;
};
