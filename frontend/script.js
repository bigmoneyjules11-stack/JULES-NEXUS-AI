document.addEventListener("DOMContentLoaded", () => {
  console.log("JULES NEXUS AI Loaded");

  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert(button.textContent + " feature coming soon!");
    });
  });
});
