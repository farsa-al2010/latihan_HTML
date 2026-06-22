var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var total = angka("total");
  var tip = angka("tip");
  var uangTip = total * tip / 100;
  hasil.textContent = "Tip: Rp " + uangTip.toFixed(0) + "\nTotal bayar: Rp " + (total + uangTip).toFixed(0);
};
