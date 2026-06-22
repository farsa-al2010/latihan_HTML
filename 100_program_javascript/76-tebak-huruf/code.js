var rahasia="abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)];
document.getElementById("tombol").onclick=function(){ var h=document.getElementById("huruf").value.toLowerCase(); document.getElementById("hasil").textContent = h==rahasia ? "Benar!" : "Salah, coba lagi"; };
