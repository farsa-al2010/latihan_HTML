var tombol = document.getElementById("tombol");
var reset = document.getElementById("reset");
var hasil = document.getElementById("hasil");
var nomor = Number(localStorage.getItem("nomorAntrean") || 0);
function tampil(){ hasil.textContent = "Nomor: A" + String(nomor).padStart(3, "0"); }
tombol.onclick = function(){ nomor++; localStorage.setItem("nomorAntrean", nomor); tampil(); };
reset.onclick = function(){ nomor = 0; localStorage.setItem("nomorAntrean", nomor); tampil(); };
tampil();
