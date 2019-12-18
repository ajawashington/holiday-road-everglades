const parkComponent = (park) => {
    let parkName = park.fullName.split(" ").join("-")
    return `
    <section>
        <div class="park">

            <header class="parkHeader">
            ${park.fullName}
            </header>

        <div> 
            State: ${park.states}
        </div>
        <div>
            Description: ${park.description}
        </div>
        <input type="button" value="Details" id="${parkName}">
        <input type="button" value="Add to Itinerary">
            <dialog class="attractionsList">
                <h3>Attractions</h3>
                    <ul>
                        <li>"bizzarie"</li>
                    </ul>
                <h3>Eatery</h3>
                    <ul>
                        <li>"eatery name"</li>
                    </ul>
                <button id=closeDialog>
            </dialog>
        </input>
    </section>
    `
}

export default parkComponent