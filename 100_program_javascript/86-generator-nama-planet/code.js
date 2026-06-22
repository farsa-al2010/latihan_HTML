var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Planet Aruna","Planet Velora","Planet Nusa-9","Planet Karsa","Planet Birawa"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
