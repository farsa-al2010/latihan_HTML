var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var data = teks.split(/\n/).filter(function(x){ return x.trim() != ""; });
  hasil.textContent = data.length ? data[Math.floor(Math.random()*data.length)] : "Isi daftar dulu";
};
