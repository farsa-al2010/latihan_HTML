var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Indonesia: Jakarta","Jepang: Tokyo","Malaysia: Kuala Lumpur","Thailand: Bangkok","Filipina: Manila"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
