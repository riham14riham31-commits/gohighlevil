/* ===========================================
   Scroll Reveal Animations
=========================================== */

const revealElements = document.querySelectorAll(
    ".feature-card, .why-card, .step-card, .review-card, .section-title, .section-subtitle, .final-cta-section"
);

function revealOnScroll() {
    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 80) {
            el.classList.add("revealed");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===========================================
   Smooth Scroll for Menu Links
=========================================== */
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth",
            });
        }
    });
});

/* ===========================================
   Floating Hover Effect (Cosmic)
=========================================== */
const floatCards = document.querySelectorAll(
    ".feature-card, .why-card, .step-card, .review-card"
);

floatCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        card.style.transform = `translateY(-6px) rotateX(${y / 40}deg) rotateY(${x / 40}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px) rotateX(0deg) rotateY(0deg)";
    });
});

/* ===========================================
   Glow Effect on CTA Buttons
=========================================== */

const ctaButtons = document.querySelectorAll(".hero-cta, .section-cta, .final-cta-btn");

ctaButtons.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const { left, top } = btn.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        btn.style.setProperty("--x", `${x}px`);
        btn.style.setProperty("--y", `${y}px`);
    });
});
