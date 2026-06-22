var tombol = document.getElementById("tombol");
var hasil = document.getElementById("hasil");
var data = ["Mobile Legends","Minecraft","Roblox","Stardew Valley","FC Mobile"];

tombol.onclick = function () {
  var nomor = Math.floor(Math.random() * data.length);
  hasil.textContent = data[nomor];
};
