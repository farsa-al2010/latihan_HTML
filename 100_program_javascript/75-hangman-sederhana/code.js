var kata="sekolah"; var tampil=Array(kata.length).fill("_"); var salah=0;
function lihat(){ document.getElementById("hasil").textContent=tampil.join(" ") + "\nSalah: " + salah; }
document.getElementById("tombol").onclick=function(){ var h=document.getElementById("huruf").value.toLowerCase(); var ada=false; for(var i=0;i<kata.length;i++){ if(kata[i]==h){ tampil[i]=h; ada=true; } } if(!ada) salah++; if(tampil.join("")==kata) document.getElementById("hasil").textContent="Menang, katanya sekolah"; else lihat(); document.getElementById("huruf").value=""; };
lihat();
