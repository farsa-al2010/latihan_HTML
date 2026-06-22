var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var n = angka("nilai");
  var a = 0, b = 1, data = [];
  for (var i = 0; i < n; i++) { data.push(a); var c = a + b; a = b; b = c; }
  hasil.textContent = data.join(", ");
};
