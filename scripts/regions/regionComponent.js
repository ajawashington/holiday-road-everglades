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

        eventHub.addEventListener("click", changeEvent => { 
            if (changeEvent.target.unchecked){ console.log("getClicked")
                document.querySelector(".parkList").innerHTML=""
            }

        })

        const renderCheckboxes = () => {

            contentTarget.innerHTML = `
            <p id="header" >CHOOSE A REGION</p>
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