var antri=[]; var daftar=document.getElementById("daftar");
function tampil(){ daftar.innerHTML=""; antri.forEach(function(x,i){ var li=document.createElement("li"); li.textContent=(i+1)+". "+x; daftar.appendChild(li); }); }
document.getElementById("tambah").onclick=function(){ var n=document.getElementById("nama").value; if(n.trim()=="") return; antri.push(n); document.getElementById("nama").value=""; tampil(); };
document.getElementById("layani").onclick=function(){ var orang=antri.shift(); document.getElementById("hasil").textContent=orang ? "Sedang dilayani: "+orang : "Antrean kosong"; tampil(); };
