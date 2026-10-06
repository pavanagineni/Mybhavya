// Visitor Counter
let visitors = 247;

setInterval(() => {
    visitors += Math.floor(Math.random()*5)-2;

    if(visitors < 200) visitors = 200;

    document.getElementById("visitorCount").innerText = visitors;
},3000);

// Stats
let gold = 0;
let depth = 0;
let strikes = 0;

const goldText = document.getElementById("gold");
const depthText = document.getElementById("depth");
const strikesText = document.getElementById("strikes");

document.getElementById("digButton").onclick = () => {

    strikes++;

    depth += Math.floor(Math.random()*3)+1;

    if(Math.random() < 0.3){
        gold += Math.floor(Math.random()*20)+1;
    }

    goldText.innerText = gold;
    depthText.innerText = depth + "m";
    strikesText.innerText = strikes;
};

// Background Stars
const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

function resize(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

resize();
window.addEventListener("resize", resize);

const stars = [];

for(let i=0;i<100;i++){
    stars.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        size:Math.random()*2
    });
}

function animate(){

    ctx.fillStyle="#050302";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="gold";

    stars.forEach(star=>{
        ctx.beginPath();
        ctx.arc(star.x,star.y,star.size,0,Math.PI*2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
