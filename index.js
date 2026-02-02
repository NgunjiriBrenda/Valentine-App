const noBtn=document.getElementById('noBtn');
const yesBtn=document.getElementById('yesBtn');
const result=document.getElementById('result');


noBtn.addEventListener("mouseover", () => {
    const x = Math.random()* 200-100;
    const y = Math.random() * 200-100;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
