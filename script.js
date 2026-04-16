// Dark mode
function toggleMode() {
    document.body.classList.toggle("dark");
}

// Typing effect
const text = "AI Enthusiast | Future AI Engineer";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 80);
    }
}
window.onload = typing;

// Lightbox
function openModal(img) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-img").src = img.src;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Particles
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    size: { value: 3 }
  }
});
