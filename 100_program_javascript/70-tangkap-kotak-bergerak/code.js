var box=document.getElementById("box"); var skor=0;
setInterval(function(){ box.style.left=Math.random()*260+"px"; box.style.top=Math.random()*230+"px"; }, 700);
box.onclick=function(){ skor++; document.getElementById("hasil").textContent="Skor: "+skor; };
