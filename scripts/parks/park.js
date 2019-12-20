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

    const parkState = park.states

    return `
    <section>
        <div class="park">
        <div class="cardTitles">
            <header class="parkHeader">
            ${park.fullName}
            </header>
            <br>
            <div>
                <img src="${currentParkImage.parkImage}">
            </div>
            <br>
        <h3 class="parkState"> 
            State: ${park.states}
        </h3>
        <br>
        <h4 class="parkDescription">
            Description: ${park.description}
        </h4>
        </div>
        <input type="button" value="Details" id="open--${parkState}">
            <dialog class="attractionList_attractions_${parkState}">
                <h2>Bizzarie</h2>
                        <div class="attractionList_bizzaries_${parkState}"></div>
                <h2>Eateries</h2>
                        <div class="attractionList_eateries_${parkState}"></div>
                <input type="button" value="close" id="close--${parkState}">
            </dialog>
        </input>
    </section>
    `
}

export default parkComponent

