var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var data = teks.split(/\n/).filter(function(x){ return x.trim() != ""; });
  for (var i = data.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = data[i]; data[i] = data[j]; data[j] = t;
  }
  hasil.textContent = data.join("\n");
};
