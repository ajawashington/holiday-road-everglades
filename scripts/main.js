import { regionSelect } from "./regions /regionSelect.js";
import { useRegions, getRegions, getParksbyRegion } from "./regions /regionsProvider.js";
import { selectedRegion } from "./regions /regionComponent.js";
import { getParks, useParks } from "./parks/ParkProvider.js"
import ParkListComponent from "./parks/parkList.js"

getRegions().then(selectedRegion)
useRegions()
regionSelect()
useParks
getParksbyRegion()
selectedRegion ()
<<<<<<< HEAD
import { getParks, useParks } from "./parks/ParkProvider.js"
import ParkListComponent from "./parks/parkList.js"
import { getEateries } from "./eateries/EateryProvider.js"
import EateryList from "./eateries/EateryList.js"


=======
>>>>>>> master
getParks().then(
() => ParkListComponent())
<<<<<<< HEAD
getEateries()
EateryList()
=======
>>>>>>> master
