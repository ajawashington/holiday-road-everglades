import { chooseRegion} from "./regionData.js"
import { getParksbyRegion } from "./regionsProvider.js"

const eventHub = document.querySelector(".container")

export const regionSelect = () => {

    const parks = chooseRegion()

    eventHub.addEventListener("regionSelected", changeEvent => {
        const region = changeEvent.detail.regions
        const matchingStates = parks.filter(
            (currentRegion) => {
                if (currentRegion.region === region) {
                    return currentRegion
                }
            }
        )
        render(matchingStates)
    })
    const render = (regions) => {
        getParksbyRegion(regions[0].states)
    }
}