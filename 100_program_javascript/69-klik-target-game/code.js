var skor=0; var area=document.getElementById("area"); var t=document.getElementById("target");
t.onclick=function(){ skor++; t.style.left=Math.random()*250+"px"; t.style.top=Math.random()*230+"px"; document.getElementById("hasil").textContent="Skor: "+skor; };
