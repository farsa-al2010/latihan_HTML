var p=document.getElementById("pemain"); var x=0,y=0;
document.onkeydown=function(e){ if(e.key=="ArrowRight") x+=15; if(e.key=="ArrowLeft") x-=15; if(e.key=="ArrowDown") y+=15; if(e.key=="ArrowUp") y-=15; x=Math.max(0,Math.min(260,x)); y=Math.max(0,Math.min(240,y)); p.style.left=x+"px"; p.style.top=y+"px"; if(x>240 && y>220) document.getElementById("hasil").textContent="Sampai finish!"; };
