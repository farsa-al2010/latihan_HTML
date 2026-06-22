var n=Number(localStorage.getItem("refreshHalaman") || 0) + 1;
localStorage.setItem("refreshHalaman", n);
document.getElementById("hasil").textContent="Halaman dibuka: " + n + " kali";
document.getElementById("reset").onclick=function(){ localStorage.setItem("refreshHalaman", 0); location.reload(); };
