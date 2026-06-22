var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Toko Maju Lancar","Toko Sinar Pagi","Toko Pelajar Hemat","Toko Serba Ada"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
