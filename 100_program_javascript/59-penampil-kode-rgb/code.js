var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var rgb = "rgb(" + angka("r") + ", " + angka("g") + ", " + angka("b") + ")";
  hasil.textContent = rgb;
  hasil.style.background = rgb;
};
