var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Es teh","Jus alpukat","Air mineral","Es jeruk","Susu coklat"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
