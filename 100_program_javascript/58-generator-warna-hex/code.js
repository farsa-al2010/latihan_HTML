document.getElementById("tombol").onclick=function(){
  var huruf="0123456789ABCDEF"; var h="#";
  for(var i=0;i<6;i++) h += huruf[Math.floor(Math.random()*16)];
  document.getElementById("hasil").textContent=h; document.getElementById("hasil").style.background=h;
};
