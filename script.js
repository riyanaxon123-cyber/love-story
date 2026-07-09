/* ==========================================
   OUR MEMORIES
   Script v1
========================================== */

const enterBtn = document.getElementById("enterBtn");
const opening = document.getElementById("opening");
const storyText = document.getElementById("storyText");
const counter = document.getElementById("counter");

const storyLines = [
    "She was in Margilan...",
    "He was in Andijan...",
    "Two cities.",
    "One beautiful story.",
    "And countless memories waiting to be remembered."
];

let line = 0;

enterBtn.addEventListener("click", () => {

    opening.style.display = "flex";

    line = 0;

    storyText.innerHTML = storyLines[0];

    const timer = setInterval(() => {

        line++;

        if(line < storyLines.length){

            storyText.innerHTML = storyLines[line];

        }else{

            clearInterval(timer);

            setTimeout(()=>{

                opening.style.opacity="0";

                setTimeout(()=>{

                    opening.style.display="none";

                },800);

            },1500);

        }

    },2200);

});


/* Countdown */

const startDate = new Date("2021-08-17T00:00:00");

function updateCounter(){

    const now = new Date();

    const diff = now-startDate;

    const days=Math.floor(diff/(1000*60*60*24));

    counter.innerHTML=days+" Days Together";

}

updateCounter();

setInterval(updateCounter,60000);
/* ==========================================
   Smooth Fade Effects
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/* ==========================================
   Navbar Blur on Scroll
========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        navbar.style.background = "rgba(255,255,255,.82)";
        navbar.style.backdropFilter = "blur(18px)";
        navbar.style.boxShadow = "0 10px 35px rgba(0,0,0,.06)";

    }else{

        navbar.style.background = "transparent";
        navbar.style.boxShadow = "none";

    }

});


/* ==========================================
   Smooth Scroll
========================================== */

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",e=>{

        e.preventDefault();

        const id=link.getAttribute("href");

        if(id==="#" ) return;

        document.querySelector(id).scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ==========================================
   Music Button (Coming Soon)
========================================== */

const musicBtn=document.querySelector(".music-btn");

let musicOn=false;

musicBtn.addEventListener("click",()=>{

    musicOn=!musicOn;

    if(musicOn){

        musicBtn.innerHTML="♫";

        musicBtn.style.transform="scale(1.15)";

    }else{

        musicBtn.innerHTML="♫";

        musicBtn.style.transform="scale(1)";

    }

});


/* ==========================================
   Console Message
========================================== */

console.log("%cOur Memories — I & R ♡","font-size:18px;color:#b48b8b;font-weight:bold;");
console.log("%cBuilt with love.","color:#9b7d7d;");
/* ==========================================
   Background Music
========================================== */

const bgMusic = document.getElementById("bgMusic");

if (enterBtn && bgMusic) {

    enterBtn.addEventListener("click", () => {

        bgMusic.volume = 0.35;

        bgMusic.play().catch(() => {
            console.log("Music autoplay was blocked.");
        });

    });

}
/* ==========================================
   IMAGE LIGHTBOX
========================================== */

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.querySelector(".close-lightbox");

document.querySelectorAll(".gallery-card img, .little-card img").forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});