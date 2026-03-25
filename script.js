const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (e) => {
  pupils.forEach(pupil => {
    const rect = pupil.parentElement.getBoundingClientRect();

    const x = (e.clientX - rect.left) / 10;
    const y = (e.clientY - rect.top) / 10;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});
const pupils = document.querySelectorAll(".pupil");
const eyes = document.querySelectorAll(".eye");

/* 👀 Mouse Follow */
document.addEventListener("mousemove", (e) => {
  pupils.forEach(pupil => {
    const rect = pupil.parentElement.getBoundingClientRect();
    const x = (e.clientX - rect.left) / 12;
    const y = (e.clientY - rect.top) / 12;
    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});

/* 😉 BLINK */
function blink() {
  eyes.forEach(e => e.style.transform = "scaleY(0.1)");
  setTimeout(() => {
    eyes.forEach(e => e.style.transform = "scaleY(1)");
  }, 120);
}
setInterval(blink, 2000 + Math.random() * 2000);

/* 👀 Random Move */
setInterval(() => {
  pupils.forEach(p => {
    const x = Math.random() * 10 - 5;
    const y = Math.random() * 10 - 5;
    p.style.transform = `translate(${x}px, ${y}px)`;
  });
}, 2500);

/* 🎭 MOOD SYSTEM (10 moods) */
function setMood(mood) {

  if (mood === "happy") {
    eyes.forEach(e => e.style.transform = "scaleY(0.8)");
  }

  if (mood === "sad") {
    eyes.forEach(e => e.style.transform = "scaleY(0.5)");
  }

  if (mood === "angry") {
    eyes.forEach(e => e.style.background = "red");
  }

  if (mood === "sleepy") {
    eyes.forEach(e => e.style.transform = "scaleY(0.3)");
  }

  if (mood === "surprise") {
    eyes.forEach(e => e.style.transform = "scale(1.3)");
  }

  if (mood === "love") {
    eyes.forEach(e => e.style.background = "pink");
  }

  if (mood === "confused") {
    pupils.forEach(p => p.style.transform = "translate(10px, -5px)");
  }

  if (mood === "excited") {
    eyes.forEach(e => e.style.transform = "scale(1.2)");
  }

  if (mood === "scared") {
    eyes.forEach(e => e.style.background = "orange");
  }

  if (mood === "normal") {
    eyes.forEach(e => {
      e.style.transform = "scale(1)";
      e.style.background = "radial-gradient(circle, #7b5cff, #00d4ff)";
    });
  }
}

/* 🖱 Click → Happy */
document.body.addEventListener("click", () => {
  setMood("happy");
  setTimeout(() => setMood("normal"), 1000);
});

/* 😮 Double Click → Surprise */
document.body.addEventListener("dblclick", () => {
  setMood("surprise");
  setTimeout(() => setMood("normal"), 800);
});

/* 😢 Idle → Sad */
let timer;
function resetIdle() {
  clearTimeout(timer);
  setMood("normal");

  timer = setTimeout(() => {
    setMood("sad");
  }, 5000);
}
document.addEventListener("mousemove", resetIdle);
document.addEventListener("click", resetIdle);
resetIdle();

/* 😡 Shake → Angry (Mobile) */
window.addEventListener("devicemotion", (e) => {
  if (e.acceleration.x > 12) {
    setMood("angry");
  }
});

/* 🎤 Voice Mode */
const recognition = new webkitSpeechRecognition();

recognition.onstart = () => setMood("excited");
recognition.onend = () => setMood("normal");

document.body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  recognition.start();
});

/* 🔊 Sound */
const sound = new Audio("click.mp3");
document.body.addEventListener("click", () => {
  sound.play();
});
