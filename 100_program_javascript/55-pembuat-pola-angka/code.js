var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var n = angka("nilai");
  var teks = "";
  for (var i = 1; i <= n; i++) { for (var j = 1; j <= i; j++) teks += j; teks += "\n"; }
  hasil.textContent = teks;
};
