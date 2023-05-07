const container = document.querySelector(".container");
const video = document.querySelector("video");
const playPauseButton = document.querySelector(".play_pause_btn");
const theaterBtn = document.querySelector(".theater_btn");
const fullScreenBtn = document.querySelector(".full_screen_btn");
const minPlayerBtn = document.querySelector(".mini_player_btn");
const muteBtn = document.querySelector(".mute_btn");
const volumeslider = document.querySelector(".volume_slider");

document.addEventListener("keydown", (e) => {
  const tagName = document.activeElement.tagName.toLowerCase();

  if (tagName === "input") return;

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return;
    case "k":
      togglePlay();
      break;
    case "f":
      toggleFullScreenMode();
      break;
    case "t":
      toggleTheaterMode();
      break;
    case "i":
      toggleMiniPlayerMode();
      break;
    case "m":
      toggleMute();
      break;
  }
});

// Volume Modes
muteBtn.addEventListener("click", toggleMute);

volumeslider.addEventListener("input", e => {
  video.volume = e.target.value;
  video.muted = e.target.value === 0;
})

function toggleMute() {
  video.muted = !video.muted;
}

video.addEventListener("volumechange", () => {
  volumeslider.value = video.volume;
  let volumeLevel;
  if(video.muted || video.volume === 0) {
    volumeslider.value = 0;
    volumeLevel = "muted";
  }else if(video.volume >= 0.5) {
    volumeLevel = "high"
  }else {
    volumeLevel = "low"
  }

  container.dataset.volumeLevel = volumeLevel;
})



// View Modes
theaterBtn.addEventListener("click", toggleTheaterMode);
fullScreenBtn.addEventListener("click", toggleFullScreenMode);
minPlayerBtn.addEventListener("click", toggleMiniPlayerMode);

function toggleTheaterMode() {
  container.classList.toggle("theater");
}

function toggleFullScreenMode() {
  if (document.fullscreenElement == null) {
    container.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

function toggleMiniPlayerMode() {
  if (container.classList.contains("mini_player")) {
    document.exitPictureInPicture();
  } else {
    video.requestPictureInPicture();
  }
}

document.addEventListener("fullscreenchange", () => {
  container.classList.toggle("full_screen", document.fullscreenElement);
});

video.addEventListener("enterpictureinpicture", () => {
  container.classList.add("mini_player");
});

video.addEventListener("leavepictureinpicture", () => {
  container.classList.remove("mini_player");
});


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
