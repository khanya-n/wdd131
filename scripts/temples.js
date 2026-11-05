const year = document.getElementById("currentyear");
const today = new Date();
const nav = document.getElementById("nav");
const navButton = document.getElementById("navButton");

document.getElementById("lastModified").textContent = "Last Modfied: " + document.lastModified;
year.textContent = today.getFullYear();

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