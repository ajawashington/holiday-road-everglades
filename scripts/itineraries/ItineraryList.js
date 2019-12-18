import { getItineraries, useItineraries, deleteItineraries } from "./itineraryProvider.js"

const contentTarget = document.querySelector(".itineraryContainer)
const eventHub = document.querySelector(".container")

const ItineraryListComponent = () => {

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteItinerary--")) {
            const [deletePrefix, itineraryId] = clickEvent.target.id.split("--")

            deleteItineraries(itineraryId).then(
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
                    </section>
                `
            }
        ).join("")
    }

}

export default ItineraryListComponent