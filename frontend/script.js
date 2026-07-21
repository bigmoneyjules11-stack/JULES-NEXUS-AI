document.addEventListener("DOMContentLoaded", function () {
    const launchButton = document.querySelector(".primary-btn");

    if (launchButton) {
        launchButton.addEventListener("click", function () {
            window.location.href = "dashboard.html";
        });
    }
});