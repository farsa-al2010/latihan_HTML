var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
tombol.onclick = function () {
  var nama = document.getElementById("nama").value.toLowerCase().replace(/\s+/g, "");
  var angka = Math.floor(Math.random() * 900) + 100;
  hasil.textContent = nama + angka;
};
