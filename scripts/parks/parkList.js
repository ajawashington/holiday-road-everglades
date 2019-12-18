import { useParks } from "./ParkProvider.js"
import parkComponent from "./park.js"

const contentElement = document.querySelector(".parkContainer")

const ParkListComponent = () => {
    const parkCollection = useParks()
    contentElement.innerHTML += `
        <div class="parkList">
            ${
                parkCollection.data.map(
                    (currentPark) => {
                        return parkComponent(currentPark)
                    }
                ).join("")
            }
        </div>
`
}

export default ParkListComponent
