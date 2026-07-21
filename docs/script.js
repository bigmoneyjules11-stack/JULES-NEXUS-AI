document.querySelector(".primary").addEventListener("click", () => {
    alert("Welcome to JULES NEXUS AI!");
});

document.querySelector(".secondary").addEventListener("click", () => {
    window.scrollTo({
        top: document.querySelector(".about").offsetTop,
        behavior: "smooth"
    });
});
