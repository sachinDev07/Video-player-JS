const myVideo = document.getElementById("myVideo");
document.addEventListener("keydown", handleKeydown);

const skipValue = 22;
const handlers = [];

for (let i = 0; i <= 9; i++) {
  handlers.push(() => {
    myVideo.currentTime = 0;
    myVideo.currentTime = skipValue * i;
  });
}

function handleKeydown(event) {
  if (event.key >= "0" && event.key <= "9") {
    handlers[parseInt(event.key)]();
  }

  switch (event.key) {
    case "k":
    case " ":
      if (myVideo.paused) {
        myVideo.play();
      } else {
        myVideo.pause();
      }
      break;
    case "m":
      myVideo.muted = !myVideo.muted;
      break;
    case "ArrowUp":
      myVideo.volume = Math.min(myVideo.volume + 0.1, 1);
      break;
    case "ArrowDown":
      myVideo.volume = Math.max(myVideo.volume - 0.1, 0);
      break;
    case "ArrowRight":
      myVideo.currentTime += 5;
      break;
    case "ArrowLeft":
      myVideo.currentTime -= 5;
      break;
    case "l":
      myVideo.currentTime += 10;
      break;
    case "j":
      myVideo.currentTime -= 10;
      break;
  }
}

