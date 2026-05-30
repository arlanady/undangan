function bukaUndangan() {
  const music = document.getElementById("music");

  // play musik
  music.play();

  // optional: hilangkan cover / lanjut ke halaman berikut
  document.querySelector(".overlay").style.display = "none";
}
function toggleMusic() {
  const music = document.getElementById("music");

  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
const container = document.querySelector(".falling-flowers");

for (let i = 0; i < 20; i++) {
  let bunga = document.createElement("span");

  bunga.style.left = Math.random() * 100 + "vw";
  bunga.style.animationDuration = (5 + Math.random() * 5) + "s";
  bunga.style.animationDelay = Math.random() * 5 + "s";

  container.appendChild(bunga);
}
