// Music player functionality
let isPlaying = false;
const audio = document.getElementById("backgroundMusic");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");
const musicWaves = document.querySelectorAll(".music-wave");

function toggleMusic() {
  if (isPlaying) {
    audio.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
    musicWaves.forEach((wave) => wave.classList.remove("playing"));
    isPlaying = false;
  } else {
    audio
      .play()
      .then(() => {
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
        musicWaves.forEach((wave) => wave.classList.add("playing"));
        isPlaying = true;
      })
      .catch((error) => {
        console.log("Error al reproducir audio:", error);
        alert(
          "Para reproducir música, necesitás hacer click primero en la página"
        );
      });
  }
}
