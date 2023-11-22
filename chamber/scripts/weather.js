
// WEATHER API

const API_KEY = 'affe36391083d704534199b34e09de67';
const CITY = 'ABUJA';

function updateWeather() {
// Current weather
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${'ABUJA'}&appid=${'affe36391083d704534199b34e09de67'}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const weatherData = document.getElementById("weatherData");
    const temperature = data.main.temp.toFixed(1);
    const weatherDescription = data.weather[0].description;
    const weatherIcon = data.weather[0].icon;

    weatherData.innerHTML = `
      <div>
      <br>
        <strong>  ${CITY}, Nigeria</strong> <br> ${temperature}°C    ${weatherDescription}
        <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather Icon">
      </div>
    `;
  })
  .catch(error => {
    console.log('Error:', error);
    const weatherData = document.getElementById("weatherData");
    weatherData.textContent = 'Failed to fetch current weather data';
  });

// Three-day forecast
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${'ABUJA'}&appid=${'affe36391083d704534199b34e09de67'}&units=metric`)
  .then(response => response.json())
  .then(data => {
    const forecastData = document.querySelector(".forecastData");
    forecastData.innerHTML = '<strong>3-Day Forecast:</strong>';

    // Extract the next 3 days from the forecast data
    const nextThreeDays = data.list.filter(entry => entry.dt_txt.includes('12:00:00'));
    nextThreeDays.forEach(day => {
      const date = new Date(day.dt * 1000);
      const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
      const temperature = day.main.temp.toFixed(1);
      const weatherDescription = day.weather[0].description;
      const weatherIcon = day.weather[0].icon;

      forecastData.innerHTML += `
        <div>
          ${dayOfWeek} | ${temperature}°C - ${weatherDescription}
          <img src="http://openweathermap.org/img/w/${weatherIcon}.png" alt="Weather Icon">
        </div>
      `;
    });
  })
  .catch(error => {
    console.log('Error:', error);
    const forecastData = document.querySelector(".forecastData");
    forecastData.textContent = 'Failed to fetch forecast data';
  });
}

// Update the weather data every 10 minutes
updateWeather();
setInterval(updateWeather, 600000);
