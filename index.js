const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const result = document.querySelector('.result');
const reasonText = document.getElementById('reasonText');
const questionSection = document.querySelector('.left');

// NO → go to why.html
noBtn.addEventListener("click", () => {
    window.location.href = "why.html";
});

// YES → show result and confetti
yesBtn.addEventListener("click", () => {
    questionSection.classList.add("hidden"); // hide question
    result.classList.remove("hidden");       // show result
    launchConfetti();
});

// If user comes back from why.html
if (localStorage.getItem("cameFromWhy") === "true") {
    questionSection.classList.add("hidden"); // hide question
    result.classList.remove("hidden");       // show result
    launchConfetti();

    const savedReason = localStorage.getItem("reason");
    if (savedReason && reasonText) {
        reasonText.textContent = `Reason: "${savedReason}" 💌`;
        localStorage.removeItem("reason");
    }

    localStorage.removeItem("cameFromWhy");
}

// Confetti 🎉
function launchConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}
