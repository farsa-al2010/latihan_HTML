var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Menggambar bebas","Mendengar lagu","Belajar shortcut keyboard","Merapikan folder laptop","Mencoba resep sederhana"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
