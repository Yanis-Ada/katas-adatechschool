const cityDiv = document.getElementById("city")
const input = document.getElementById("cityInput");
const button = document.querySelector("button");
const gpsDiv = document.getElementById("gps");
const detailsDiv = document.getElementById("details");
const temperatureDiv = document.getElementById("temperature")
const humiDiv = document.getElementById("humidity")
const preciDiv = document.getElementById("precipitation")

async function fetchCoordinates(city) {
    try {
        const coordinatesUrl = `https://nominatim.openstreetmap.org/search?q=${city}&format=json&addressdetails=1&limit=1`;
        const response = await fetch(coordinatesUrl);
        const data = await response.json();
        const lat = data[0].lat;
        const lon = data[0].lon;
       
        cityDiv.textContent = `${city}`
        gpsDiv.textContent = `Coordonnées GPS : ${lat}, ${lon}`; 
        detailsDiv.textContent = "Coordonnées récupérées.";
       
        fetchWeather(lat, lon)

        } catch (error) {
        gpsDiv.textContent = "";
        detailsDiv.textContent = `Erreur : ${error.message}`;
        console.error("Problème de récuperation de données", error)

        if (input != city) {
            cityDiv.textContent = "Ville non trouvée";
            detailsDiv.textContent = "Vérifier le nom de la ville";
        }
      }
    }
    
    button.addEventListener("click", () => {
        const city = input.value.trim();
        if (city === "") {
            detailsDiv.textContent = "Merci de saisir un nom de ville.";
            gpsDiv.textContent = "";
            return;
        }
        gpsDiv.textContent = "";
        detailsDiv.textContent = "Chargement en cours...";
        
     fetchCoordinates(city);
    });

async function fetchWeather(lat, lon) {
    try {
        const tempUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m`;
        const tempRes = await fetch(tempUrl);
        const tempData = await tempRes.json();
        const temperature = tempData.current.temperature_2m;
        temperatureDiv.textContent += `${temperature} °C`;

        const humiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=relative_humidity_2m`;
        const humiRes = await fetch(humiUrl);
        const humiData = await humiRes.json();
        const humidity = humiData.current.relative_humidity_2m;
        humiDiv.textContent = `Taux d'humidité : ${humidity} %`;
        
        const preciUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=precipitation`;
        const preciRes = await fetch(preciUrl);
        const preciData = await preciRes.json();
        const precipitation = preciData.current.precipitation;
        preciDiv.textContent = `Précipitations : ${precipitation} mm`;

    } catch (error) {
        detailsDiv.textContent += `Erreur météo : ${error.message}`;
        console.error("Problème de récupération météo", error);
    }
}

