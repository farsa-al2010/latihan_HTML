var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var n = angka("nilai");
  var f = 1;
  for (var i = 1; i <= n; i++) f *= i;
  hasil.textContent = n + "! = " + f;
};
