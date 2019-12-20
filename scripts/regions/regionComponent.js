import {chooseRegion} from "./regionData.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".regionFilters")

export const selectedRegion = () => {
        const region = chooseRegion()

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
            
            else{
                const region = clickEvent.target.value

                console.log("unchecked")
                document.querySelector(`.parkList--${region}`).remove()
            } 
        
        })
       

        const renderCheckboxes = () => {
            
          
            contentTarget.innerHTML = `  
            <a href="/index.html" ><img class="logo" src="/logo.png"/><a
            <h1 id="head"> PLAN YOUR TRIP HERE</h1>
            <br style="line-height: 40px" />
           <h2 id="header" >CHOOSE A REGION</h2>
           <br style="line-height: 30px" />
           <div id="regionDiv">
            <input type="checkbox" name="region" id="reg--South" value="South" />South
            <input type="checkbox" name="region" id="reg--Northeast" value="Northeast" />Northeast
            <input type="checkbox" name="region" id="reg--Midwest" value="Midwest"/>Midwest
            <input type="checkbox" name="region" id="reg--West" value="West">West
            <br>
            <input type="button" value="View Saved Itineraries"/>
            </div>
            
                `
        }
        
        
            
renderCheckboxes()
}