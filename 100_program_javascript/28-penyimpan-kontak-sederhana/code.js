var nama = document.getElementById("nama");
var hp = document.getElementById("hp");
var daftar = document.getElementById("daftar");
var data = JSON.parse(localStorage.getItem("kontakSederhana") || "[]");
function tampil(){ daftar.innerHTML=""; data.forEach(function(x){ var li=document.createElement("li"); li.textContent=x.nama + " - " + x.hp; daftar.appendChild(li); }); }
document.getElementById("tambah").onclick=function(){ if(nama.value.trim()=="") return; data.push({nama:nama.value, hp:hp.value}); localStorage.setItem("kontakSederhana", JSON.stringify(data)); nama.value=""; hp.value=""; tampil(); };
document.getElementById("hapus").onclick=function(){ data=[]; localStorage.setItem("kontakSederhana", JSON.stringify(data)); tampil(); };
tampil();
