// import { useParks } from "./ParkProvider.js"
import parkComponent from "./park.js"
import { useRegionsInRegion } from "../regions/regionsProvider.js"

const contentElement = document.querySelector(".parkContainer")

const ParkListComponent = () => {
    const parkCollection = useRegionsInRegion()
    contentElement.innerHTML += `
        <div class="parkList">
            ${
                parkCollection.map(
                    (currentPark) => {
                        return parkComponent(currentPark)
                    }
                ).join("")
            }
        </div>
`
}

export default ParkListComponent
