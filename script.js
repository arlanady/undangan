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
