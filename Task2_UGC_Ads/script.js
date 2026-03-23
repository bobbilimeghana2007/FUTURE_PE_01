let likes = 0;

function likeAd(button){

likes++;

document.getElementById("likes").innerText = likes;

button.innerText = "❤️ Liked";

}

function buyNow(){

document.getElementById("ctaMsg").innerText =
"GlowAI purchase page coming soon!";

}

function generateHook(){

const hooks=[

"This serum made my skin glow in 7 days",

"My skincare routine changed after GlowAI",

"This product is trending on Instagram",

"I tried GlowAI and my acne improved",

"This one product replaced my skincare routine"

];

let random=Math.floor(Math.random()*hooks.length);

let newHook=document.createElement("div");

newHook.className="card";

newHook.innerText=hooks[random];

document.getElementById("hookList").appendChild(newHook);

}

function addHook(){

let input=document.getElementById("userHook").value;

if(input==="") return;

let newHook=document.createElement("div");

newHook.className="card";

newHook.innerText=input;

document.getElementById("hookList").appendChild(newHook);

document.getElementById("userHook").value="";

}