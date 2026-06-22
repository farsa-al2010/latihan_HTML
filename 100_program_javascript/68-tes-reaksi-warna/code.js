var area=document.getElementById("area"); var mulai=document.getElementById("mulai"); var siap=false; var waktu=0;
mulai.onclick=function(){ area.style.background="#f2b6b6"; document.getElementById("hasil").textContent="Tunggu hijau..."; siap=false; setTimeout(function(){ area.style.background="#87e09a"; siap=true; waktu=Date.now(); }, Math.random()*2500+1000); };
area.onclick=function(){ if(siap){ document.getElementById("hasil").textContent="Reaksi: " + (Date.now()-waktu) + " ms"; siap=false; } else document.getElementById("hasil").textContent="Kepagian kliknya"; };
