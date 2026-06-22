var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var teks = String(Math.abs(angka("nilai"))).replace(/\D/g, "");
  hasil.textContent = "Jumlah digit: " + teks.length;
};
