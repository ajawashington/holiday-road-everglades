let parks = []
let parksInRegion = []
// let eateries = []
// let attractions = []

export const useParksInRegion = () => {
    return parksInRegion
}
export const useParks= () => {
    return parks
}

export const getParks = () => {
   
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

export const getAttractions = () => {

    console.log("I am fetching")
}