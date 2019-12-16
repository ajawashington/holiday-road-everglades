import { useParks } from "./ParkProvider.js";

const eventHub= document.querySelector(".container")
const contentTarget = document.querySelector (".parkFilters")

export const parkSelect = () => {
    const parks = useParks ()

    eventHub.addEventListener("change", changeEvent => { 
    
    if (changeEvent.target.classList.contains("dropdown_parks")) {
        const selectedPark = changeEvent.target.value

        const message = new CustomEvent("parkSelected", { 
            detail: {
                park: selectedPark
            }})
            eventHub.dispatchEvent(message)
    }
    })

    const render = parkCollection => {
        contentTarget.innerHTML = `
        <select class="dropdown"> 
        <option value="0">Please select a Park...</option>
        ${parkCollection.data.map(
            parks => `<option id="parkSelect">${parks.fullName}</option>`

        )}

        </select>
        `
                    
    }

    render(parks)
}

export default parkSelect