import { useAttractions } from "../attractions/AttractionProvider.js";

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".attractionList_bizzaries")

const AttractionbyParkComponent = () => {
    eventHub.addEventListener("click", event => {
        if(event.target.dispatchEvent.startsWith("open--")) {
            const bizarries = useAttractions()
            const foundAttraction = bizarries.find(
                (statebizarrie) => {
                    return statebizarrie.state === event.target.dispatchEvent.split("--")[1]
                }
            )
        }
    })
}
///need to add const diaolog sibiling selector here
const bizarrieHTML = (attraction) => {
    contentTarget.innerHTML = `
    <div id="attraction--${attraction.id}" >
        <h4>Name: ${attraction.name}</h4>
        <h5>Location: ${attraction.city}, ${attraction.state}</h5>
    </div>
    `
}