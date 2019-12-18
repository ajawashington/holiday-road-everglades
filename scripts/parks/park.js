const parkComponent = (park) => {
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
        <button>
            <dialog>
                <h3>Attractions</h3>
                    <ul>
                        <li> ${bizzare}
                <h3>Eatery</h3>
                    <ul>
                        <li> ${eatery.businessName}
        </button>
            </dialog>
    </section>
    `
}

export default parkComponent