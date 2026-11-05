const year = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");
const nav = document.getElementById("nav");
const navButton = document.getElementById("navButton");

navButton.addEventListener("click", function() {
    nav.classList.toggle("open");
    isOpen = nav.classList.contains("open");

    if (isOpen) {
        navButton.textContent = "✕"
    } 
    else {
        navButton.textContent = "☰"
    }
})