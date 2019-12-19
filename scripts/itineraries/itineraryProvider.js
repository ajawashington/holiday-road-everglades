
let itineraries = []
const setItineraries = (itineraryArray) => {
    itineraries = itineraryArray.slice() 
}

export const useItineraries = () =>  itineraries.slice()

//This is the function to go into the Itinerary Array and delete an object
export const deleteItinerary = (itineraryId) => {
    return fetch(`http://localhost:8888/itineraries/${itineraryId}`, {
        method: "DELETE"
    })
    .then(getItineraries)
}
//This is the function to post a new object to the array
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

//This is the function to go and get the Itineraries in the array

export const getItineraries = () => {
    return fetch("http://localhost:8888/itineraries")
    .then(response => response.json())
    .then((itineraryArray) => {
        itineraries = itineraryArray.slice()
    })
}
console.log("the itineraries were fetched")