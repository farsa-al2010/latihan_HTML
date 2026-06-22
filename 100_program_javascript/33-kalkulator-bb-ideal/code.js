var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var tinggi = angka("tinggi");
  var ideal = (tinggi - 100) * 0.9;
  hasil.textContent = "BB ideal kira-kira: " + ideal.toFixed(1) + " kg";
};
