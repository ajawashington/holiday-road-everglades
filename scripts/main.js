import { regionSelect } from "./regions /regionSelect.js";
import { useParks, getParks, getParksbyRegion } from "./regions /regionsProvider.js";
import { selectedRegion } from "./regions /regionComponent.js";

getParks().then(selectedRegion)
useParks()
regionSelect()
getParksbyRegion()
selectedRegion ()
import { getParks, useParks } from "./parks/ParkProvider.js"
import ParkListComponent from "./parks/parkList.js"
import { getEateries } from "./eateries/EateryProvider.js"
import EateryList from "./eateries/EateryList.js"


getParks().then(
() => ParkListComponent())
<<<<<<< HEAD
getEateries()
EateryList()
=======
>>>>>>> master
