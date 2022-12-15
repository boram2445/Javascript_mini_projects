const backgroundAudio = new Audio("./sound/bg.mp3");
const carrotAudio = new Audio("./sound/carrot_pull.mp3");
const bugAudio = new Audio("./sound/bug_pull.mp3");
const winAudio = new Audio("./sound/game_win.mp3");

export function playBackground() {
  playSound(backgroundAudio);
}

export function playCarrot() {
  playSound(carrotAudio);
}

export function playBug() {
  playSound(bugAudio);
}

export function playWin() {
  playSound(winAudio);
}

export function stopBackground() {
  stopSound(backgroundAudio);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
