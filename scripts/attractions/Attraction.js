
const eventHub = document.querySelector(".container")

export const AttractionComponent = (attraction) => {
    return `
    <div id="attraction--${attraction.id}" >
        <h4>Name: ${attraction.name}</h4>
        <h5>Location: ${attraction.city}, ${attraction.state}</h5>
    </div>
    
    <dialog id="dialog"> 
    
        <div>Name: ${attraction.name}</div>
        <div>Location: ${attraction.city}, ${attraction.state}</div>
        <div>Description: ${attraction.description}</div>
        <div>Ameneties: 
        <div>Souvenirs: ${attraction.ameneties.souvenirs}</div>
        <div>Restrooms: ${attraction.ameneties.restrooms}</div>
        </div>

    <button class="button--save" id="attraction--${attraction.id}">Save Attraction</button>
    </dialog>
    `
}



eventHub.addEventListener("mouseover", theMouseOverEvent => {
   
    if (theMouseOverEvent.target.id.startsWith("attraction--")) {
        const dialogSibilingSelection = `#${theMouseOverEvent.target.id}+dialog`;
        ///If the clicked element has an id that starts with asss-- then find the dialog sibling of that specific button
        const showDialog = document.querySelector(dialogSibilingSelection)
        showDialog.show();
    }
})
eventHub.addEventListener("mouseout", theMouseOutEvent => {
        if (theMouseOutEvent.target.id.startsWith("attraction--")) {
            const dialogSibilingSelection = `#${theMouseOutEvent.target.id}+dialog`;
            const hideDialog = document.querySelector(dialogSibilingSelection)
            hideDialog.close();
        }
    })

