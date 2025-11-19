// Effet d'apparition du site
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;

    setTimeout(() => {
        document.body.style.transition = "1.2s";
        document.body.style.opacity = 1;
    }, 150);
});
// Son bip sur hover des compétences
const bip = new Audio("bip.mp3");
const skillCards = document.querySelectorAll(".card");

skillCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        bip.currentTime = 0;
        bip.play();
    });
});
// Animation d'écriture style terminal
const text = "Étudiant en Développement & Cybersécurité | IPSSI";
let index = 0;

function typeEffect() {
    const terminal = document.getElementById("terminal-text");
    if (index < text.length) {
        terminal.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 40);
    }
}

typeEffect();

// Animation des barres de compétences
const bars = document.querySelectorAll(".bar span");

function animateBars() {
    bars.forEach(bar => {
        const width = bar.getAttribute("style").match(/\d+/)[0];
        bar.style.width = width + "%";
    });
}

window.addEventListener("scroll", animateBars);

// Mode sombre / mode clair
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    
    if (document.body.classList.contains("light-mode")) {
        toggle.textContent = "🌙 Mode sombre";
    } else {
        toggle.textContent = "☀ Mode clair";
    }
});
