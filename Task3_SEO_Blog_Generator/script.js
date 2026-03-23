const icons=["💰","💵","📊","📈","🏢","💳"];

for(let i=0;i<25;i++){

let icon=document.createElement("span");

icon.innerText=icons[Math.floor(Math.random()*icons.length)];

icon.style.left=Math.random()*100+"vw";

icon.style.animationDuration=(Math.random()*5+5)+"s";

document.querySelector(".falling").appendChild(icon);

}

function generateBlog(){

let topic=document.getElementById("topicInput").value;

if(topic==="") return;

document.getElementById("output").classList.remove("hidden");

document.getElementById("title").innerText=
"Complete Business Guide: "+topic;

document.getElementById("keywords").innerText=
topic+", "+topic+" tips, "+topic+" business strategy";

let score=Math.floor(Math.random()*20)+80;

document.getElementById("seoScore").innerText=score+"/100";

let readability=Math.floor(Math.random()*20)+80;

document.getElementById("readability").innerText=readability+"/100";

let outline=document.getElementById("outline");

outline.innerHTML="";

let points=[

"Introduction to "+topic,

"Benefits of "+topic+" for businesses",

"Top strategies for "+topic,

"Common mistakes in "+topic,

"Future trends of "+topic

];

points.forEach(point=>{

let li=document.createElement("li");

li.innerText=point;

outline.appendChild(li);

});

document.getElementById("content").innerText=

topic+" is becoming an essential strategy for modern businesses. "+
"In this guide we explore effective techniques, strategies, and "+
"practical methods to help companies succeed using "+topic+".";

let links=document.getElementById("links");

links.innerHTML="";

let linkIdeas=[

"Beginner guide to "+topic,

"Advanced "+topic+" techniques",

"Best tools for "+topic

];

linkIdeas.forEach(link=>{

let li=document.createElement("li");

li.innerText=link;

links.appendChild(li);

});

}

function copyBlog(){

let text=document.getElementById("content").innerText;

navigator.clipboard.writeText(text);

alert("Blog copied!");

}