import { useParkImages } from "./parkImages.js"

const parkComponent = (park) => {

    const parkImages = useParkImages()

    const parkName = park.fullName

    const parkImageFunction = (currentPark) => {
        return parkImages.find((obj) => {
            return obj.parkName === currentPark
        })
    }

    const currentParkImage = parkImageFunction(parkName)

    // console.log(currentParkImage)

    let parkState = park.states

    return `
    <section>
        <div class="park">  
            <header class="parkHeader">
            ${park.fullName}
            </header>
            <div>
                <img src="${currentParkImage.parkImage}">
            </div>
        <div> 
            State: ${park.states}
        </div>
        <div>
            Description: ${park.description}
        </div>
        <input type="button" value="Details" id="open--${parkState}">
            <dialog class="attractionList_attractions_${parkState}">
                <h3>Bizzarie</h3>
                        <div class="attractionList_bizzaries_${parkState}"></div>
                <h3>Eateries</h3>
                        <div class="attractionList_eateries_${parkState}"></div>
                <input type="button" value="close" id="close--${parkState}">
            </dialog>
        </input>
    </section>
    `
}

export default parkComponent

