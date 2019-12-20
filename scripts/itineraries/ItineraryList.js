import { getItineraries, useItineraries, deleteItinerary } from "./itineraryProvider.js"

const contentTarget = document.querySelector(".itineraryContainer")
const eventHub = document.querySelector(".container")

const ItineraryListComponent = () => {
//This is to listen when the delete Itinerary is clicked and then delete that itinerary and show the new Itinterary list

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteItinerary--")) {
            const [deletePrefix, itineraryId] = clickEvent.target.id.split("--")

            deleteItinerary(itineraryId).then(
                () => {
                    const theNewItineraries = useItineraries()
                    render(theNewItineraries)
                }
            )
        }
    })

const renderItinerariesAgain = () => {
    const allTheItineraries = useItineraries()
    render(allTheItineraries)
    }
eventHub.addEventListener("itineraryCreated", event => {
    renderItinerariesAgain()
    })

//This is when the Show Itinerary button is clicked to render the itineraries
    eventHub.addEventListener("showItineraryButtonClicked", event => {
    renderItinerariesAgain()
    })
    const render = (itineraryCollection) => {
        contentTarget.innerHTML = itineraryCollection.map(
            (individualItinerary) => {
                return `
                <section class="itinerary">
                <div>${individualItinerary.park}</div>
                <div>${individualItinerary.bizarie}</div>
                <div>${individualItinerary.eatery}</div>
                <button id="deleteItinerary--${individualItinerary.id}">Delete This Itinerary</button>
                <button id="showItinerary">Show Notes</button>
                
                </section>
                `
            }
            ).join("")
        }
        
    }
    
    console.log("Show It button clicked")
export default ItineraryListComponent