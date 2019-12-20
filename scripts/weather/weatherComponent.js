import { getWeatherbyRegion } from "./WeatherProvider.js"
import { chooseWeather } from "./weatherData.js"




const eventHub = document.querySelector(".container")

export const weatherSelect = () => {

    const parks = chooseWeather()

    eventHub.addEventListener("weatherSelected", changeEvent => {
        const weather = changeEvent.detail.regions
        const matchingRegions = parks.filter(
            (currentWeather) => {
                if (currentWeather.lat. === lat)(currentWeather.lot === lot) {
                    return currentWeather
                }
            }
        )
        render(matchingRegions)
    })
    const render = (weather) => {
        getWeatherbyRegion[0].lot.lat)
    }
}

