let parks = []
let parksInRegion = []
// let eateries = []
// let attractions = []

export const useRegionsInRegion = () => {
    return parksInRegion
}
export const useRegions= () => {
    return parks
}

export const getRegions = () => {
   
    console.log("***I am fetching the parks***")
    return fetch('https://developer.nps.gov/api/v1/parks?api_key=e7nUtP2jRRovkoLURmKzkGQAqyIbCktiHsgdj9Yx')
        .then(response => response.json())
        .then(
            parsedParks => {

            parks = parsedParks.data

            }

        )
}

export const getParksbyRegion = (states) => {
   
    console.log("***I am fetching the parks***")
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=e7nUtP2jRRovkoLURmKzkGQAqyIbCktiHsgdj9Yx&statecode=${states}`)
        .then(response => response.json())
        .then(
            parsedParks => {

        //    parksInRegion = parsedParks.data
        console.log(parsedParks.data)

            }

        )
}

export const getEateries = () => {

    console.log("I am fetching eateries")
}

export const getEateriesbyRegion = () => {
    console.log("I am fetching eateries by region")
}

export const getAttractions = () => {

    console.log("I am fetching")
}

export const getAttractionsbyRegion = () => {
    console.log("I am fetching attractions")
}