import { getParks, useParks } from "./parks/ParkProvider.js"
import ParkListComponent from "./parks/parkList.js"
import { getEateries } from "./eateries/EateryProvider.js"
import EateryList from "./eateries/EateryList.js"


getParks().then(
() => ParkListComponent())
getEateries()
EateryList()