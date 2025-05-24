// scripts/place.js

function calculateWindChill(tempC, windKmh) {
  return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

document.addEventListener('DOMContentLoaded', () => {
  // Footer year and last modified date
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;

  // Wind Chill calculation
  const temp = parseFloat(document.getElementById('temp').textContent);
  const wind = parseFloat(document.getElementById('wind').textContent);

  const windchillSpan = document.getElementById('windchill');

  if (temp <= 10 && wind > 4.8) {
    const chill = calculateWindChill(temp, wind);
    windchillSpan.textContent = `${chill.toFixed(1)} °C`;
  } else {
    windchillSpan.textContent = "N/A";
  }
});
