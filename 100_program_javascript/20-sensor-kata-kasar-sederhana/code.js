var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var sensor = ["bodoh", "goblok", "kasar"];
  var baru = teks;
  for (var i = 0; i < sensor.length; i++) {
    var r = new RegExp(sensor[i], "gi");
    baru = baru.replace(r, "***");
  }
  hasil.textContent = baru;
};
