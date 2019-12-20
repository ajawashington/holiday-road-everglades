export const getWeatherbyRegion = (states) => {
   
    console.log("***I am fetching the parks***")
    return fetch(`api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}`)
        .then(response => response.json())
        .then(
            parsedWeather => {

           WeatherInRegion = parsedWeather.data
        // console.log(parsedParks.data)
                    ParkListComponent()
            }
            
        )
}
