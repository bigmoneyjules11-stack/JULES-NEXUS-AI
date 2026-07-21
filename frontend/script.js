document.addEventListener("DOMContentLoaded", function () {

    // Launch Platform button
    const launchButton = document.querySelector(".primary");

    if (launchButton) {
        launchButton.addEventListener("click", function () {
            window.location.href = "dashboard.html";
        });
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    }, {
        threshold: 0.2
    });

    sections.forEach(function(section) {

        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.8s ease";

        observer.observe(section);

    });

});