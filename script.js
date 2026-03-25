const pupils = document.querySelectorAll(".pupil");

document.addEventListener("mousemove", (e) => {
  pupils.forEach(pupil => {
    const rect = pupil.parentElement.getBoundingClientRect();

    const x = (e.clientX - rect.left) / 10;
    const y = (e.clientY - rect.top) / 10;

    pupil.style.transform = `translate(${x}px, ${y}px)`;
  });
});
