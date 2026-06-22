var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var bb = angka("bb");
  hasil.textContent = "Kebutuhan air: " + (bb * 35) + " ml per hari";
};
