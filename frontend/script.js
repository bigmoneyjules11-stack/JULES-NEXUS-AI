document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    // Fade-in animation
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });
    },{
        threshold:0.2
    });

    sections.forEach(section=>{

        section.style.opacity="0";
        section.style.transform="translateY(50px)";
        section.style.transition="all .8s ease";

        observer.observe(section);

    });

    // Button animation
    document.querySelectorAll("button").forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="scale(1.05)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="scale(1)";

        });

    });

    // Launch button
    const launch = document.querySelector(".primary");

    if(launch){

        launch.addEventListener("click",()=>{

            alert("Welcome to JULES NEXUS AI.\n\nThe full platform is currently under development.");

        });

    }

});