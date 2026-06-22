var isi=["A","A","B","B","C","C","D","D"];
isi.sort(function(){ return Math.random()-0.5; });
var papan=document.getElementById("papan"); var buka=[]; var benar=0;
isi.forEach(function(x,i){ var b=document.createElement("button"); b.className="kartu"; b.textContent="?"; b.onclick=function(){ if(b.textContent!="?") return; b.textContent=x; buka.push({btn:b, isi:x}); if(buka.length==2){ if(buka[0].isi==buka[1].isi){ benar++; buka=[]; } else setTimeout(function(){ buka[0].btn.textContent="?"; buka[1].btn.textContent="?"; buka=[]; },600); } if(benar==4) document.getElementById("hasil").textContent="Menang!"; }; papan.appendChild(b); });
