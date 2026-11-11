const year = document.querySelector("#currentyear");
const today = new Date();
const temperature = 30;
const windSpeed = 14;

const windChillCalculator = (temperature, windSpeed) => 13.12 + (0.6215 * temperature) - (11.37 * windSpeed ** 0.16) + (0.3965 * temperature * windSpeed ** 0.16);

year.innerHTML = `${today.getFullYear()}`;
document.getElementById("lastModified").textContent = "Last Modfied: " + document.lastModified;
document.getElementById("temperature").textContent = temperature;
document.getElementById("windSpeed").textContent = windSpeed;

if ((temperature <= 10) & (windSpeed > 4.8)) {
    const windChill = windChillCalculator(temperature, windSpeed).toFixed(2);
    document.getElementById("windChill").textContent = windChill + " °C";
} else {
    document.getElementById("windChill").textContent = "N/A";
}