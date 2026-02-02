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
