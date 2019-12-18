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
getParks().then(
<<<<<<< HEAD
    () => parkSelect()
)
=======
() => ParkListComponent())
>>>>>>> master
