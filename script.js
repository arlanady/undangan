// =======================
// 🌸 FALLING FLOWERS
// =======================
const container = document.querySelector(".falling-flowers");

if (container) {
  for (let i = 0; i < 20; i++) {
    let bunga = document.createElement("span");

    bunga.style.left = Math.random() * 100 + "vw";
    bunga.style.animationDuration = (5 + Math.random() * 5) + "s";
    bunga.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(bunga);
  }
}


// =======================
// 🎵 MUSIC CONTROL
// =======================
const music = document.getElementById("music");

function toggleMusic() {
  if (!music) return;

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}


// =======================
// 🚪 BUKA UNDANGAN
// =======================
function bukaUndangan() {
  if (music) music.play();

  // sembunyikan cover
  const overlay = document.querySelector(".overlay");
  if (overlay) overlay.style.display = "none";

  // tampilkan halaman isi
  const isi = document.getElementById("isi");
  if (isi) isi.style.display = "block";

  // tampilkan bottom bar
  const bar = document.querySelector(".bottom-bar");
  if (bar) bar.style.display = "flex";

  // tambahkan ini
  document.body.classList.add("open");
}


// =======================
// 📱 NAVIGATION SECTION
// =======================
function showSection(id) {
  const semua = document.querySelectorAll(".section");
  const btn = document.querySelectorAll(".bottom-bar button");

  semua.forEach(sec => sec.classList.remove("aktif"));
  btn.forEach(b => b.classList.remove("active"));

  const target = document.getElementById(id);
  if (target) target.classList.add("aktif");

  // aktifkan tombol yang diklik
  if (event && event.target) {
    event.target.classList.add("active");
  }
}
