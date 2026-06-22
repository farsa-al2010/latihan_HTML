var angka=["A","2","3","4","5","6","7","8","9","10","J","Q","K"]; var jenis=["Sekop","Hati","Wajik","Keriting"];
document.getElementById("tombol").onclick=function(){ var a=angka[Math.floor(Math.random()*angka.length)]; var j=jenis[Math.floor(Math.random()*jenis.length)]; document.getElementById("hasil").textContent=a + " " + j; };
