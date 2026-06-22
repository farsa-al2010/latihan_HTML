var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var akhir = angka("tugas") * 0.3 + angka("uts") * 0.3 + angka("uas") * 0.4;
  hasil.textContent = "Nilai akhir: " + akhir.toFixed(2);
};
