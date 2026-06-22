var area=document.getElementById("area");
area.onmousemove=function(e){ var r=area.getBoundingClientRect(); document.getElementById("hasil").textContent="x: "+Math.floor(e.clientX-r.left)+", y: "+Math.floor(e.clientY-r.top); };
