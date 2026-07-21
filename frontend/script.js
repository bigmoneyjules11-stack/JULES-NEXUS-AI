// JULES NEXUS AI

document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(".feature-card, .platform-box, .glass-panel");

const observer = new IntersectionObserver((entries)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{
threshold:0.15
});

cards.forEach(card=>{
card.classList.add("hidden");
observer.observe(card);
});

});

// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});