function hex(){ var h="#"; var x="0123456789ABCDEF"; for(var i=0;i<6;i++) h+=x[Math.floor(Math.random()*16)]; return h; }
document.getElementById("tombol").onclick=function(){ var a=hex(), b=hex(); var g="linear-gradient(120deg, "+a+", "+b+")"; document.body.style.background=g; document.getElementById("hasil").textContent=a + " ke " + b; };
