const boom = document.getElementById("boom");
const kick = document.getElementById("kick");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");

const boomClick = document.getElementById("boom1");
const kickClick = document.getElementById("kick1");
const clapClick = document.getElementById("clap1");
const hihatClick = document.getElementById("hihat1");
const openhatClick = document.getElementById("openhat1");
const rideClick = document.getElementById("ride1");
const snareClick = document.getElementById("snare1");
const tinkClick = document.getElementById("tink1");
const tomClick = document.getElementById("tom1");

window.addEventListener("keydown", (e) => {
  if (e.key == "a") {
    boomClick.style.transform = scale(1.5);
    boom.play();
    boom.currentTime = 0;
  } else if (e.key == "f") {
    kick.pause();
    kick.currentTime = 0;
    kick.play();
  } else if (e.key === "s") {
    clap.pause(), (clap.currentTime = 0), clap.play();
  } else if (e.key === "d") {
    hihat.pause();
    hihat.currentTime = 0;
    hihat.play();
  } else if (e.key === "g") {
    openhat.pause();
    openhat.currentTime = 0;
    openhat.play();
  } else if (e.key === "h") {
    ride.pause();
    ride.currentTime = 0;
    ride.play();
  } else if (e.key === "j") {
    snare.pause();
    snare.currentTime = 0;
    snare.play();
  } else if (e.key === "k") {
    tink.pause();
    tink.currentTime = 0;
    tink.play();
  } else if (e.key === "l") {
    tom.pause();
    tom.currentTime = 0;
    tom.play();
  }
});

// window.addEventListener("click", (event) =>{
//   if ("click" == boom) {
//     boom.play();
//     boom.currentTime = 0;
// }})
boomClick.addEventListener("click", () => {
  boom.play();
  boom.currentTime = 0;
});

kickClick.addEventListener("click", () => {
  kick.play();
  kick.currentTime = 0;
});
clapClick.addEventListener("click", () => {
  clap.play();
  clap.currentTime = 0;
});
hihatClick.addEventListener("click", () => {
  hihat.play();
  hihat.currentTime = 0;
});
openhatClick.addEventListener("click", () => {
  openhat.play();
  openhat.currentTime = 0;
});
rideClick.addEventListener("click", () => {
ride.play();
  ride.currentTime = 0;
});
snareClick.addEventListener("click", () => {
 snare.play();
  snare.currentTime = 0;
});
tinkClick.addEventListener("click", () => {
  tink.play();
  tink.currentTime = 0;
});
tomClick.addEventListener("click", () => {
  tom.play();
  tom.currentTime = 0;
});
// const BoomImg = document.getElementById("boom1");

// BoomImg.addEventListener("click" () => {
//   BoomImg.style.transform = sca
// })