var papan=document.getElementById("papan"); var isi=Array(9).fill(""); var giliran="X";
function cek(){ var w=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]; for(var i=0;i<w.length;i++){ var a=w[i]; if(isi[a[0]] && isi[a[0]]==isi[a[1]] && isi[a[1]]==isi[a[2]]) return isi[a[0]]; } return ""; }
function buat(){ papan.innerHTML=""; isi.forEach(function(x,i){ var b=document.createElement("button"); b.className="petak"; b.textContent=x; b.onclick=function(){ if(isi[i]!="") return; isi[i]=giliran; var m=cek(); if(m) document.getElementById("hasil").textContent="Menang: "+m; else { giliran=giliran=="X"?"O":"X"; document.getElementById("hasil").textContent="Giliran "+giliran; } buat(); }; papan.appendChild(b); }); }
document.getElementById("ulang").onclick=function(){ isi=Array(9).fill(""); giliran="X"; document.getElementById("hasil").textContent="Giliran X"; buat(); };
buat();
