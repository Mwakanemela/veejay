var audio, playbtn, timeline, playhead, volume;

window.addEventListener("load", initAudioPlayer);

function initAudioPlayer() {
  audio = new Audio();
  audio.src = "2.mp3";
  
  playbtn = document.getElementById("playpausebtn");
  timeline = document.getElementById("timeline");
  playhead = document.getElementById("playhead");
  volume = document.getElementById("volume");

  playbtn.addEventListener("click", playPause);
  timeline.addEventListener("click", seek);
  volume.addEventListener("change", setVolume);

  audio.addEventListener("timeupdate", updatePlayhead);
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playbtn.innerHTML = "Pause";
  } else {
    audio.pause();
    playbtn.innerHTML = "Play";
  }
}

function seek(event) {
  var percent = event.offsetX / timeline.offsetWidth;
  audio.currentTime = percent * audio.duration;
  playhead.style.left = percent * timeline.offsetWidth + "px";
}

function setVolume() {
  audio.volume = volume.value / 100;
}

function updatePlayhead() {
  var percent = audio.currentTime / audio.duration;
  playhead.style.left = percent * timeline.offsetWidth + "px";
}
