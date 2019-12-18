const parkComponent = (park) => {
    let parkState = park.states
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
        <input type="button" value="Details" id="${parkState}">
            <dialog class="attractionList_attractions">
                <h3>Bizzarie</h3>
                        <div class="attractionList_bizzaries"></div>
                <h3>Eateries</h3>
                        <div class="attractionList_eateries"></div>
                <input type="button" value="close" id="closeDialog">
            </dialog>
        </input>
    </section>
    `
}

export default parkComponent