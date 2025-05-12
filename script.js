const confettiButton = document.querySelector(".confetti-button");
const confettiSound = document.getElementById("confetti-sound");

confettiButton.addEventListener("click", () => {
    confettiSound.currentTime = 0;
    confettiSound.play();
    confetti({
        particleCount: 400,
        spread: 200,
        origin: { x: 0.5, y: 0.4 },
    });
});