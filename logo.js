// ==========================
// VIDEO GALLERY
// ==========================

const videoGrid = document.getElementById("videoGrid");
const totalVideos = 24; // Change to 73 when all videos exist

for (let i = 1; i <= totalVideos; i++) {

    videoGrid.innerHTML += `
        <div class="video-card">

            <video
                class="preview"
                autoplay
                muted
                loop
                playsinline
                preload="metadata"
                data-video="videos/logo${i}.mp4">

                <source src="videos/logo${i}.mp4" type="video/mp4">

            </video>

            <p>Project ${i}</p>

        </div>
    `;
}

// ==========================
// MODAL
// ==========================

const modal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeBtn = document.querySelector(".close");

// OPEN MODAL

document.addEventListener("click", (e) => {

    const card = e.target.closest(".video-card");

    if (card) {

        const video = card.querySelector(".preview");
        const src = video.dataset.video;

        modal.style.display = "flex";

        modalVideo.src = src;
        modalVideo.loop = true;
        modalVideo.currentTime = 0;

        modalVideo.play();

    }

});

// CLOSE FUNCTION

function closeModal() {

    modalVideo.pause();
    modalVideo.currentTime = 0;
    modalVideo.src = "";

    modal.style.display = "none";

}

// CLOSE BUTTON

closeBtn.addEventListener("click", closeModal);

// CLICK OUTSIDE VIDEO

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        closeModal();
    }

});

// ESC KEY

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        closeModal();
    }

});

// ==========================
// ERROR CHECKING
// ==========================

document.addEventListener("error", (e) => {

    if (e.target.tagName === "VIDEO") {
        console.log("Video failed to load:", e.target.currentSrc);
    }

}, true);