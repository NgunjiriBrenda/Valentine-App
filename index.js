const noBtn=document.getElementById('noBtn');
const yesBtn=document.getElementById('yesBtn');
const result=document.getElementById('result');


noBtn.addEventListener("click", () => {
    window.location.href= "why.html"; 
   
});

yesBtn.addEventListener("click", () => {
    result.classList.remove("hidden");
});

if(localStorage.getItem("cameFromWhy") === "true") {
    result.classList.remove("hidden");
    localStorage.removeItem("cameFromWhy");
}


function launchConfetti() {
    for(let i = 0; i < 30; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDuration = Math.random() * 2 + 2 + "s";
        document.body.appendChild(confetti);

        setTimeout(() => confetti.remove(), 4000);
    }
}