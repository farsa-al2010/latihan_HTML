var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
function angka(id) {
  return Number(document.getElementById(id).value);
}

tombol.onclick = function () {
  var harga = angka("harga");
  var diskon = angka("diskon");
  var potongan = harga * diskon / 100;
  hasil.textContent = "Harga akhir: Rp " + (harga - potongan).toFixed(0);
};
