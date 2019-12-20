import { AttractionComponent } from "./Attraction.js"


let attractions = []

export const useAttractions = () => {
    return attractions.slice()
    ///copies an array
    
}

export const getAttractions = () => {
    return fetch("http://holidayroad.nss.team/bizarreries", {
        method: "Get"
    })
    .then(response => response.json())
    .then(
        parsedAttractions => {
            attractions = parsedAttractions.slice()

        }
    )
}
