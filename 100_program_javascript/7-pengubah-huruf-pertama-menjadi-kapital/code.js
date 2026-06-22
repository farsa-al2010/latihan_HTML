var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var baru = teks.trim();
  hasil.textContent = baru.charAt(0).toUpperCase() + baru.slice(1);
};
