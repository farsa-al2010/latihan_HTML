var data=JSON.parse(localStorage.getItem("bukuTamu") || "[]"); var daftar=document.getElementById("daftar");
function tampil(){ daftar.innerHTML=""; data.forEach(function(x){ var li=document.createElement("li"); li.textContent=x.nama + " bilang: " + x.pesan; daftar.appendChild(li); }); }
document.getElementById("tambah").onclick=function(){ var n=document.getElementById("nama").value; var p=document.getElementById("pesan").value; if(n.trim()=="") return; data.push({nama:n,pesan:p}); localStorage.setItem("bukuTamu", JSON.stringify(data)); document.getElementById("nama").value=""; document.getElementById("pesan").value=""; tampil(); };
document.getElementById("hapus").onclick=function(){ data=[]; localStorage.setItem("bukuTamu", JSON.stringify(data)); tampil(); };
tampil();
