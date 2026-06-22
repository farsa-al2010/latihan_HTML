var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Menara Eiffel ada di Prancis","Tokyo ada di Jepang","Jakarta ada di Indonesia","Kanguru terkenal dari Australia"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
