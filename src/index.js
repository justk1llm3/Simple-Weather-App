import './styles.css';
import './convert.js'

import { fahrenheitToCelsius } from './convert.js';
//for just the first day
const feelikeTxt = document.querySelector(".feel-like");
const degreeTxt = document.querySelector(".degree");


let time = 0;

async function getWeather(location) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=JJRFS5VFYMCPJ28PGPUWV8RK3`, { mode: 'cors' });
    const weatherData = await response.json();
    return weatherData;
}
let place;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitButton').addEventListener('click', () => {
        const inputText = document.getElementById('userInput').value;
        place = inputText;
        updateWeather();
    });
});



async function updateWeather() {
    const loadingElement = document.getElementById('loading');
    const locationResult = document.getElementById('result');
    const elementsToHide = [degreeTxt, feelikeTxt, locationResult];

    // Show loading component, hide other elements
    loadingElement.style.display = 'block';
    elementsToHide.forEach(el => el.style.display = 'none');

    try {
        const weatherData = await getWeather(place);

        // Show the data elements
        elementsToHide.forEach(el => el.style.display = 'block');

        // Update current day content
        locationResult.textContent = `Location: ${weatherData.resolvedAddress}`;
        degreeTxt.textContent = `Degrees: ${fahrenheitToCelsius(weatherData.currentConditions.temp)}`;
        feelikeTxt.textContent = `Feels like: ${fahrenheitToCelsius(weatherData.currentConditions.feelslike)}`;

        // Update grid with other weather details
        document.getElementById('wind').textContent = `Wind: ${weatherData.currentConditions.windspeed} km/h`;
        document.getElementById('humidity').textContent = `Humidity: ${weatherData.currentConditions.humidity}%`;
        document.getElementById('chanceOfRain').textContent = `Chance of Rain: ${weatherData.currentConditions.precipprob}%`;
        document.getElementById('cloudiness').textContent = `Cloudiness: ${weatherData.currentConditions.cloudcover}%`;

        // If sunrise and sunset times are available, update them
        if (weatherData.currentConditions.sunrise && weatherData.currentConditions.sunset) {
            document.getElementById('sunrise').textContent = `Sunrise: ${weatherData.currentConditions.sunrise}`;
            document.getElementById('sunset').textContent = `Sunset: ${weatherData.currentConditions.sunset}`;
        } else {
            // Handle cases where sunrise/sunset data is not available
            document.getElementById('sunrise').textContent = `Sunrise: N/A`;
            document.getElementById('sunset').textContent = `Sunset: N/A`;
        }

        // Update content for the bottom row (next 6 days)
        const daysClasses = ['two', 'three', 'four', 'five', 'six', 'seven'];
        for (let i = 0; i < daysClasses.length; i++) {
            const degreeElement = document.querySelector(`.degree.${daysClasses[i]}`);
            const feelikeElement = document.querySelector(`.feel-like.${daysClasses[i]}`);

            degreeElement.textContent = `Degrees: ${fahrenheitToCelsius(weatherData.days[i + 1].tempmax)}°C`;
            feelikeElement.textContent = `/${fahrenheitToCelsius(weatherData.days[i + 1].tempmin)}°C`;
        }
    } catch (error) {
        elementsToHide.forEach(el => el.style.display = 'block');
        locationResult.style.display = 'none';
        degreeTxt.textContent = "Could not retrieve weather data.";
        feelikeTxt.textContent = "Could not retrieve weather data.";

        // Handle error for grid elements
        document.getElementById('wind').textContent = "Could not retrieve data.";
        document.getElementById('humidity').textContent = "Could not retrieve data.";
        document.getElementById('chanceOfRain').textContent = "Could not retrieve data.";
        document.getElementById('cloudiness').textContent = "Could not retrieve data.";
        document.getElementById('sunrise').textContent = "Could not retrieve data.";
        document.getElementById('sunset').textContent = "Could not retrieve data.";

        // Handle error for bottom row headers
        const daysClasses = ['two', 'three', 'four', 'five', 'six', 'seven'];
        for (let i = 0; i < daysClasses.length; i++) {
            const degreeElement = document.querySelector(`.degree.${daysClasses[i]}`);
            const feelikeElement = document.querySelector(`.feel-like.${daysClasses[i]}`);

            degreeElement.textContent = "Could not retrieve weather data.";
            feelikeElement.textContent = "Could not retrieve weather data.";
        }
    } finally {
        // Hide the loading component
        loadingElement.style.display = 'none';
    }
}




place = 'london'; // set defualt location
updateWeather();


