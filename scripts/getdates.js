const year = document.querySelector("#currentyear");
const today = new Date();

year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").textContent = "Last Modfied: " + document.lastModified;