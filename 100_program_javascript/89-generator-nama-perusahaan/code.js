var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["PT Karya Anak Muda","CV Maju Koding","PT Sinar Digital","CV Bintang Teknologi"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
