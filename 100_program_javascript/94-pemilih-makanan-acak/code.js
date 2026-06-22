var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Nasi goreng","Mie ayam","Bakso","Soto","Ayam geprek"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
