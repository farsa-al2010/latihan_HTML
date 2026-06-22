var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var n = angka("nilai");
  var prima = n > 1;
  for (var i = 2; i < n; i++) if (n % i == 0) prima = false;
  hasil.textContent = prima ? "Bilangan prima" : "Bukan bilangan prima";
};
