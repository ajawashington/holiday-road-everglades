import { saveItinerary, getItineraries } from "./itineraryProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".showItineraryContainer")


const ItineraryFormComponent = () => {

    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveItinerary") {
            // Make an object
console.log("the button was clicked")
            const newItinerary = {
                park: document.querySelector("#itinerary-park").value,
                bizarie: document.querySelector("#itinerary-bizarie").value,
                eatery: document.querySelector("#itinerary-eatery").value
            }

            saveItinerary(newItinerary).then(
                () => {
                    const message = new CustomEvent("itineraryCreated")
                    eventHub.dispatchEvent(message)
                }
            )

        }
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "showItinerary") {
            const message = new CustomEvent("showItineraryButtonClicked")
            eventHub.dispatchEvent(message)
        }
    })
console.log("show it button was clicked")
//This below seems to be where you would fill in Itinerary-Preview, I'm, not sure that we'd need this.  I need a itinerary preview section where these can be intered with a button preview itiernaryr rather than an input field

const render = () => {
        contentTarget.innerHTML = `
            <details>
                <summary>Itinerary </summary>
                <div class="itinerary__field">
                    Park: <input type="text" id="itinerary-park" />
                </div>
                <div class="itinerary__field">
                    Bizarie: <input type="text" id="itinerary-bizarie" />
                </div>
                <div class="itinerary__field">
                    Eatery: <input type="text" id="itinerary-eatery" />
                </div>

                <button class="itinerary__field" id="saveItinerary">Save Itinerary</button>
                <button class="itinerary__field" id="showItineraries">Show Itineraries</button>
            </details>
        `
    }

    render()
 }

export default ItineraryFormComponent