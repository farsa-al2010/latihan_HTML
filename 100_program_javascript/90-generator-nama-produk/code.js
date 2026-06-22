var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["SmartBox Mini","KopiKita","Lampu Hematku","Tas Rapi","Botol Segar"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
