var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Aku punya belalai: gajah","Aku suka mengeong: kucing","Aku bisa terbang: burung","Aku hidup di air: ikan"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
