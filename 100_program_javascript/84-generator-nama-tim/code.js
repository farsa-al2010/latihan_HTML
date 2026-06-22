var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Tim Garuda Muda","Tim Debug Santai","Tim Langkah Cepat","Tim Kode Pagi"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
