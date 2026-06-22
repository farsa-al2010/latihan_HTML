var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var cocok = teks.toLowerCase().match(/[bcdfghjklmnpqrstvwxyz]/g);
  hasil.textContent = "Jumlah konsonan: " + (cocok ? cocok.length : 0);
};
