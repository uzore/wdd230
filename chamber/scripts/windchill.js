let temperature = document.querySelector('#temperture')
let windspeed = document.querySelector('#windspeed')
let windchill = document.querySelector('#windchill')

if (temperature <= 50 && windspeed > 3) {
    windchill_calc = 35.74 + 0.6215 * temperature - 35.75 * windspeed ** 0.16 + 0.4275 * temperature * windspeed ** 0.16
    windchill.textContent = Math.round(windchill_calc)
} else {
    windchill.textContent -  "N/A"
}