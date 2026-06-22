var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Kota Lembah Baru","Kota Sukamaju","Kota Harapan Jaya","Kota Senja Indah"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
