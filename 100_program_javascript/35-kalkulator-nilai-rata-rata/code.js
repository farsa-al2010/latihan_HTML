document.getElementById("tombol").onclick = function(){
  var teks = document.getElementById("angka").value;
  var data = teks.split(",").map(Number).filter(function(x){ return !isNaN(x); });
  var total = 0;
  for(var i=0;i<data.length;i++) total += data[i];
  document.getElementById("hasil").textContent = data.length ? "Rata-rata: " + (total/data.length).toFixed(2) : "Isi angkanya dulu";
};
