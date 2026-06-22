var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Laskar Pelangi","Petualangan Sherina","Keluarga Cemara","Ngeri-Ngeri Sedap"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
