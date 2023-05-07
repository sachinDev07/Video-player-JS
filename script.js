const container = document.querySelector(".container");
const video = document.querySelector("video");
const playPauseButton = document.querySelector(".play_pause_btn");

// Play/pause
playPauseButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

function togglePlay() {
  video.paused ? video.play() : video.pause();
}

video.addEventListener("play", () => {
  container.classList.remove("paused");
});

video.addEventListener("pause", () => {
  container.classList.add("paused");
});
