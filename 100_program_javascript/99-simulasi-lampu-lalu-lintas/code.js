var data=["red","yellow","green"]; var nama=["Merah","Kuning","Hijau"]; var i=0;
document.getElementById("tombol").onclick=function(){ i++; if(i>=data.length) i=0; document.getElementById("lampu").style.background=data[i]; document.getElementById("hasil").textContent=nama[i]; };
