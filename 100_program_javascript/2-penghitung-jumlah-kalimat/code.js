var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var kalimat = teks.split(/[.!?]+/).filter(function(x){ return x.trim() != ""; });
  hasil.textContent = "Jumlah kalimat: " + kalimat.length;
};
