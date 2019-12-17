import { getParks, useParks } from "./parks/ParkProvider.js"
import ParkListComponent from "./parks/parkList.js"


getParks().then(
() => ParkListComponent())
