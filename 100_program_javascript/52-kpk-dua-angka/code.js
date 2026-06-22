var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var a = angka("a"), b = angka("b");
  var besar = Math.max(a, b);
  while (besar % a != 0 || besar % b != 0) besar++;
  hasil.textContent = "KPK: " + besar;
};
