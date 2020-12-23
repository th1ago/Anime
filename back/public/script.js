const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        // take the video
        modalOverlay.querySelector("iframe").src = `https://www.youtube.com/embed/${videoId}`
    })
}

// close the windows
document.querySelector(".close-modal").addEventListener("click", function() {
    modalOverlay.classList.remove("active")
    // close de video
    modalOverlay.querySelector("iframe").src = ""
})