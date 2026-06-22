var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Raka Senja","Dina Lestari","Bimo Arka","Naya Biru","Reno Langit"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
