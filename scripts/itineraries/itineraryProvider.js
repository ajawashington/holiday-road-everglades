
let itineraties = []
const setItineraries = (itineraryArray) => {
    itineraties = itineraryArray.slice() 
}
export const useItineraries = () setItineraries.slice()
export const deleteItinerary = (itineraryId) => {
    return fetch("http://localhost:8888/itineraries/${itineraryId}", {
        method: "DELETE"
    })
    .then(getItineraries)
}
export const saveItinerary = itinerary => {
    return fetch("http://localhost:8888/itineraries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItineraries)
}
export const getItineraries = () => {
    return fetch("http://localhost:8888/itineraries")
    .then(response => response.json())
    .then((itineraryArray) => {
        itineraries = itineraryArray.slice()
    })
}