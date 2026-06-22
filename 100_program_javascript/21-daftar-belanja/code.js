var isi = document.getElementById("isi");
var daftar = document.getElementById("daftar");
var tombolTambah = document.getElementById("tambah");
var tombolHapus = document.getElementById("hapus");
var data = JSON.parse(localStorage.getItem("daftarBelanja") || "[]");

function tampilkan() {
  daftar.innerHTML = "";
  for (var i = 0; i < data.length; i++) {
    var li = document.createElement("li");
    li.textContent = data[i];
    daftar.appendChild(li);
  }
}

tombolTambah.onclick = function () {
  if (isi.value.trim() == "") return;
  data.push(isi.value.trim());
  localStorage.setItem("daftarBelanja", JSON.stringify(data));
  isi.value = "";
  tampilkan();
};

tombolHapus.onclick = function () {
  data = [];
  localStorage.setItem("daftarBelanja", JSON.stringify(data));
  tampilkan();
};

tampilkan();
