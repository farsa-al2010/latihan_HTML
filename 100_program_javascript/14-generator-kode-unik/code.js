var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["AB-1029","ZX-7781","KP-4502","SMK-2026","JS-9012","RX-3390"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
