var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  hasil.textContent = angka("nilai") + " meter = " + (angka("nilai") / 1000) + " km";
};
