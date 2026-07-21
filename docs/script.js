/*==========================================================
  JULES NEXUS AI
  script.js
  PART 1
==========================================================*/

"use strict";

/*==========================================================
  ELEMENTS
==========================================================*/

const greetingElement =
document.getElementById("nexusGreeting");

const conversationButton =
document.getElementById("startConversation");

const revealElements =
document.querySelectorAll(".reveal, .fade-left, .fade-right");

const mouseLight =
document.createElement("div");

mouseLight.className = "mouse-light";

document.body.appendChild(mouseLight);

/*==========================================================
  NEXUS OPENING MESSAGE
==========================================================*/

const openingMessage =
"Hello. I'm Nexus, your personal AI companion. How may I assist you today?";

/*==========================================================
  FOLLOW-UP PHRASES
==========================================================*/

const followUpMessages = [

"How can I help you today?",

"What would you like to accomplish?",

"What are we building today?",

"Need help with your business?",

"I'm ready whenever you are.",

"What can I assist you with?",

"Let's make today productive.",

"Need ideas or solutions?",

"How may I assist?",

"What would you like to create?",

"Where would you like to begin?",

"What's today's objective?",

"I'm here whenever you need me.",

"Let's build something incredible.",

"Tell me what you need."

];

let remainingMessages = [];

function shuffleMessages(){

    remainingMessages =
    [...followUpMessages];

    for(
        let i = remainingMessages.length - 1;
        i > 0;
        i--
    ){

        const j =
        Math.floor(
        Math.random() * (i + 1));

        [
            remainingMessages[i],
            remainingMessages[j]
        ] = [
            remainingMessages[j],
            remainingMessages[i]
        ];

    }

}
/*==========================================================
  SESSION GREETING
==========================================================*/

const introShown =
sessionStorage.getItem("nexusIntro");

if(!introShown){

    greetingElement.textContent =
    openingMessage;

    sessionStorage.setItem(
        "nexusIntro",
        "true"
    );

}else{

    shuffleMessages();

    greetingElement.textContent =
    remainingMessages.shift();

}

conversationButton.addEventListener(
"click",
() => {

    if(
        remainingMessages.length === 0
    ){

        shuffleMessages();

    }

    greetingElement.textContent =
    remainingMessages.shift();

});
/*==========================================================
  SCROLL REVEAL
==========================================================*/

const revealObserver =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(element=>{

revealObserver.observe(element);

});
/*==========================================================
  SMOOTH NAVIGATION
==========================================================*/

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener("click",event=>{

event.preventDefault();

const target=document.querySelector(

link.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});
/*==========================================================
  MOUSE LIGHT
==========================================================*/

document.addEventListener(

"mousemove",

event=>{

mouseLight.style.left=

`${event.clientX}px`;

mouseLight.style.top=

`${event.clientY}px`;

}

);

document.addEventListener(

"mouseleave",

()=>{

mouseLight.style.opacity="0";

}

);

document.addEventListener(

"mouseenter",

()=>{

mouseLight.style.opacity=".9";

}

);
/*==========================================================
  HEADER SCROLL EFFECT
==========================================================*/

const header=

document.querySelector(".header");

window.addEventListener(

"scroll",

()=>{

if(window.scrollY>40){

header.style.background=

"rgba(5,8,20,.92)";

header.style.backdropFilter=

"blur(22px)";

}else{

header.style.background=

"rgba(5,8,20,.28)";

header.style.backdropFilter=

"blur(18px)";

}

});
/*==========================================================
  CARD HOVER EFFECT
==========================================================*/

const cards=document.querySelectorAll(

".glass"

);

cards.forEach(card=>{

card.addEventListener(

"mousemove",

event=>{

const rect=

card.getBoundingClientRect();

const x=

event.clientX-rect.left;

const y=

event.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(255,255,255,.16),
rgba(255,255,255,.08) 60%)`;

});

card.addEventListener(

"mouseleave",

()=>{

card.style.background=

"rgba(255,255,255,.08)";

});

});
/*==========================================================
  HERO PARALLAX
==========================================================*/

const heroLight=

document.querySelector(".hero-light");

window.addEventListener(

"mousemove",

event=>{

const x=

(event.clientX/window.innerWidth)*20;

const y=

(event.clientY/window.innerHeight)*20;

heroLight.style.transform=

`translate(${x}px,${y}px)`;

});
/*==========================================================
  FLOATING PARTICLES
==========================================================*/

const particlesContainer =
document.querySelector(".floating-particles");

if(particlesContainer){

for(let i=0;i<45;i++){

const particle =
document.createElement("span");

particle.style.position="absolute";
particle.style.width=`${2+Math.random()*5}px`;
particle.style.height=particle.style.width;
particle.style.borderRadius="50%";
particle.style.background="rgba(255,255,255,.55)";
particle.style.left=`${Math.random()*100}%`;
particle.style.top=`${Math.random()*100}%`;
particle.style.opacity=Math.random()*.7;
particle.style.animation=
`floatParticle ${12+Math.random()*18}s linear infinite`;

particle.style.animationDelay=
`${Math.random()*8}s`;

particlesContainer.appendChild(particle);

}

}
/*==========================================================
  BUTTON RIPPLE
==========================================================*/

document.querySelectorAll(

".primary-button,.secondary-button,.launch-button,.nexus-button"

).forEach(button=>{

button.addEventListener("click",event=>{

const ripple=
document.createElement("span");

const size=
Math.max(
button.offsetWidth,
button.offsetHeight
);

ripple.style.position="absolute";
ripple.style.width=`${size}px`;
ripple.style.height=`${size}px`;
ripple.style.borderRadius="50%";
ripple.style.left=
`${event.offsetX-size/2}px`;
ripple.style.top=
`${event.offsetY-size/2}px`;

ripple.style.background=
"rgba(255,255,255,.35)";

ripple.style.transform="scale(0)";
ripple.style.pointerEvents="none";
ripple.style.transition=".6s";

button.appendChild(ripple);

requestAnimationFrame(()=>{

ripple.style.transform="scale(3)";
ripple.style.opacity="0";

});

setTimeout(()=>{

ripple.remove();

},650);

});

});
/*==========================================================
  ANIMATED COUNTERS
==========================================================*/

document.querySelectorAll("[data-count]")

.forEach(counter=>{

const target=

Number(counter.dataset.count);

let value=0;

const update=()=>{

value+=Math.ceil(target/120);

if(value>=target){

counter.textContent=target;

return;

}

counter.textContent=value;

requestAnimationFrame(update);

};

update();

});
/*==========================================================
  ACTIVE NAVIGATION
==========================================================*/

const sections=

document.querySelectorAll("section");

const navLinks=

document.querySelectorAll(".navigation a");

window.addEventListener(

"scroll",

()=>{

let current="";

sections.forEach(section=>{

const top=

section.offsetTop-180;

if(window.scrollY>=top){

current=section.id;

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(

link.getAttribute("href")==="#"+current

){

link.classList.add("active");

}

});

});
/*==========================================================
  PERFORMANCE
==========================================================*/

let resizeTimer;

window.addEventListener(

"resize",

()=>{

clearTimeout(resizeTimer);

resizeTimer=

setTimeout(()=>{

document.body.classList.add("resized");

setTimeout(()=>{

document.body.classList.remove("resized");

},250);

},100);

});
/*==========================================================
  INITIALIZATION
==========================================================*/

window.addEventListener(

"load",

()=>{

document.body.classList.add("loaded");

document.querySelectorAll(

".glass"

).forEach(card=>{

card.style.willChange=

"transform";

});

});
/*==========================================================
  END OF FILE
==========================================================*/

console.log(

"%cJULES NEXUS AI READY",

"color:#00e8ff;font-size:18px;font-weight:bold;"

);

