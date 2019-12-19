import {chooseRegion} from "./regionData.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".regionFilters")

export const selectedRegion = () => {
        const parks = chooseRegion()

        eventHub.addEventListener("change", clickEvent => {

            if (clickEvent.target.checked) {
                const region = clickEvent.target.value

                const message = new CustomEvent("regionSelected", {
                    detail: {
                        regions: region
                    }
                })
                eventHub.dispatchEvent(message)
            }
        })

        eventHub.addEventListener("uncheck", clickEvent => { 
            if (clickEvent.target.unchecked){ console.log("getClicked")
                document.querySelector(".park").innerHTML=""
            }

        })

        const renderCheckboxes = () => {

            contentTarget.innerHTML = `
            <h1 id="head"> PLAN YOUR TRIP HERE!</h2>
           <div id="header" >CHOOSE A REGION</div><div><input type="button" id="viewItin" value="View Saved Itineraries"></div>
            <br>
            <div id="regionDiv">
            <input type="checkbox" name="region" id="reg--South" value="South" />South
            <input type="checkbox" name="region" id="reg--Northeast" value="Northeast" />Northeast
            <input type="checkbox" name="region" id="reg--Midwest" value="Midwest" />Midwest
            <input type="checkbox" name="region" id="reg--West" value="West">West
            </div>
            
                `
        }
        
        
            
renderCheckboxes()
}