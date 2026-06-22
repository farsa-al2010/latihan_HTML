var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var a = angka("a"), b = angka("b");
  while (b != 0) { var sisa = a % b; a = b; b = sisa; }
  hasil.textContent = "FPB: " + a;
};
