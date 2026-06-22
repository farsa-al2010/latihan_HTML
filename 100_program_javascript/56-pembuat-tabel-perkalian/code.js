var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var n = angka("nilai");
  var teks = "";
  for (var i = 1; i <= 10; i++) teks += n + " x " + i + " = " + (n*i) + "\n";
  hasil.textContent = teks;
};
