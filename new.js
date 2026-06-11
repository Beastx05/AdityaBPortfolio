/* ==========================
   AUTOPLAY ALL VIDEOS
========================== */

document.querySelectorAll("video").forEach(video => {

    video.muted = true;

    video.play().catch(() => {});

});


/* ==========================
   SCROLL REVEAL ANIMATION
========================== */

const reveals = document.querySelectorAll(
".section-title,.skill-card,.portfolio-card,.stat,.tool,.about-content,.contact"
);

const revealOnScroll = () => {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

function openPodcast(videoSrc) {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");

    if (!modal || !video) return;

    video.src = videoSrc;

    modal.style.display = "flex";

    video.load();
    video.play();

}

function closePodcast() {

    const modal = document.getElementById("videoModal");
    const video = document.getElementById("popupVideo");

    if (!modal || !video) return;

    video.pause();
    video.currentTime = 0;

    modal.style.display = "none";

}

/* ==========================
   CLOSE ON OUTSIDE CLICK
========================== */

window.addEventListener("click", e => {

    const modal = document.getElementById("videoModal");

    if (modal && e.target === modal) {
        closePodcast();
    }

});

/* ==========================
   HERO PARALLAX EFFECT
========================== */

window.addEventListener("scroll",()=>{

    const heroVideo =
    document.querySelector(".hero-video");

    const scrolled =
    window.pageYOffset;

    heroVideo.style.transform =
    `scale(1.1) translateY(${scrolled * 0.2}px)`;

});


/* ==========================
   CARD HOVER GLOW
========================== */

document.querySelectorAll(".portfolio-card")
.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,255,255,.08),
        transparent 40%)`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background = "transparent";

    });

});


/* ==========================
   SMOOTH REVEAL CLASS
========================== */

const style = document.createElement("style");

style.innerHTML = `

.section-title,
.skill-card,
.portfolio-card,
.stat,
.tool,
.about-content,
.contact{

opacity:0;
transform:translateY(50px);
transition:all .8s ease;

}

.show{

opacity:1 !important;
transform:translateY(0) !important;

}

`;

document.head.appendChild(style);


/* ==========================
   LOADING SCREEN
========================== */

window.addEventListener("load",()=>{

    const loader =
    document.querySelector(".loader");

    if(loader){

        loader.classList.add("hide");

        setTimeout(()=>{

            loader.remove();

        },700);

    }

});