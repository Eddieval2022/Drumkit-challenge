const boom = document.getElementById("boom");
const kick = document.getElementById("kick");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

document.addEventListener("keypress", (keyValue) => {
  if (keyValue.keyCode === 97) {
    boom.play();
  } else if (keyValue.keyCode == 102) {
    kick.play();
  } else if (keyValue.keyCode === 115) {
    clap.play();
  } else if (keyValue.keyCode == 100) {
    hihat.play();
  } else if (keyValue.keyCode == 103) {
    openhat.play();
  } else if (keyValue.keyCode == 104) {
    ride.play();
  } else if (keyValue.keyCode == 106) {
    snare.play();
  } else if (keyValue.keyCode == 107) {
    tink.play();
  } else if (keyValue.keyCode == 108) {
    tom.play();
  }
});
