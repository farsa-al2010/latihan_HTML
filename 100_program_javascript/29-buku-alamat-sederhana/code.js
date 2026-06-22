var data = JSON.parse(localStorage.getItem("bukuAlamat") || "[]");
var daftar = document.getElementById("daftar");
function tampil(){ daftar.innerHTML=""; data.forEach(function(x){ var li=document.createElement("li"); li.textContent=x.nama + " : " + x.alamat; daftar.appendChild(li); }); }
document.getElementById("tambah").onclick=function(){ var n=document.getElementById("nama").value; var a=document.getElementById("alamat").value; if(n.trim()=="") return; data.push({nama:n, alamat:a}); localStorage.setItem("bukuAlamat", JSON.stringify(data)); document.getElementById("nama").value=""; document.getElementById("alamat").value=""; tampil(); };
document.getElementById("hapus").onclick=function(){ data=[]; localStorage.setItem("bukuAlamat", JSON.stringify(data)); tampil(); };
tampil();
