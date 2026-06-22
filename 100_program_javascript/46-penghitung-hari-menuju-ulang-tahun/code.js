document.getElementById("tombol").onclick=function(){
  var v=document.getElementById("tanggal").value;
  if(v==""){ document.getElementById("hasil").textContent="Pilih tanggal dulu"; return; }
  var now=new Date(); var t=new Date(v); var ultah=new Date(now.getFullYear(), t.getMonth(), t.getDate());
  if(ultah < now) ultah.setFullYear(now.getFullYear()+1);
  var hari=Math.ceil((ultah-now)/(1000*60*60*24));
  document.getElementById("hasil").textContent="Menuju ulang tahun: " + hari + " hari lagi";
};
