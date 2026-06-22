var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Guild Cahaya Timur","Guild Kode Merah","Guild Bintang Kecil","Guild Papan Hitam"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
