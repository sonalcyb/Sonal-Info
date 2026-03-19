// --- Mobile Menu Toggle ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-links a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
}));

// --- Sticky Navbar on Scroll ---
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// --- Scroll Reveal Animation ---
const revealElements = document.querySelectorAll(".reveal");

const revealFunction = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealFunction);
// Trigger once on load
revealFunction();

// --- Dummy Contact Form Submission ---
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = "Message Sent!";
    btn.style.backgroundColor = "transparent";
    btn.style.border = "1px solid var(--accent-green)";
    btn.style.color = "var(--accent-green)";
    
    // Reset form
    setTimeout(() => {
        this.reset();
        btn.innerText = originalText;
        btn.style.backgroundColor = "var(--accent-green)";
        btn.style.color = "var(--bg-color)";
    }, 3000);
});