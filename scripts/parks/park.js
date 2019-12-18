const parkComponent = (park) => {

    let parkName = ${park.fullName}.split("").join("")

    return `<div class="${parkName}">
    <div>
        ${park.fullName}
    </div>
            <button> 
                <dialog>
                    <h3>Attractions</h3>
                        <ul>
                            <li> ${bizzarie}
                    <h3>Eatery</h3>
                        <ul>
                            <li> ${eatery.businessName}
            </button>
        </dialog>
    </div>`
}

export default parkComponent