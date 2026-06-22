document.getElementById("tombol").onclick=function(){
  var v=document.getElementById("tanggal").value;
  if(v=="") return;
  var lahir=new Date(v); var now=new Date();
  var hari=Math.floor((now-lahir)/(1000*60*60*24));
  document.getElementById("hasil").textContent="Kamu sudah hidup sekitar " + hari + " hari";
};
