import { useAttractions } from "./AttractionProvider.js"
import { AttractionComponent } from "./Attraction.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".bizzarrieContainer")

////This is what is supposed to listen for hover event and upon click and return the notes to the page
export const AttractionListComponent = () => {
    eventHub.addEventListener("MouseOverAttraction", event => {
        const showTheAttractionDetails = useAttractions()
        
        render(showTheAttractionDetails)
    })

////This is the html to return the notes collection
    const render = (attractionDetails) => {
        contentTarget.innerHTML = attractionDetails.map(
            (individualAttraction) => {
                
                return AttractionComponent(individualAttraction)
                
           
                            
            }
            ).join("")
        }
        render(useAttractions())
    }