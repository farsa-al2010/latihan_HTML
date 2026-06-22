var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");

tombol.onclick = function () {
  var teks = document.getElementById("teks").value;
  var asli = teks.toLowerCase().replace(/[^a-z0-9]/g, "");
  var balik = asli.split("").reverse().join("");
  if (asli == "") hasil.textContent = "Tulis kata dulu.";
  else if (asli == balik) hasil.textContent = "Palindrome";
  else hasil.textContent = "Bukan palindrome";
};
