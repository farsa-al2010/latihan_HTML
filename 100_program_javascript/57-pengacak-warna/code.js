var warna = ["lightblue", "lightgreen", "pink", "khaki", "salmon", "plum"];
document.getElementById("tombol").onclick=function(){ var w=warna[Math.floor(Math.random()*warna.length)]; document.body.style.background=w; document.getElementById("hasil").textContent=w; };
