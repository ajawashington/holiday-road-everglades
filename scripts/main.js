<<<<<<< HEAD
import { regionSelect } from "./regions /regionSelect.js";
import { useParks, getParks, getParksbyRegion } from "./regions /regionsProvider.js";
import { selectedRegion } from "./regions /regionComponent.js";

getParks().then(selectedRegion)
useParks()
regionSelect()
getParksbyRegion()
selectedRegion ()
=======
import { getParks, useParks } from "./parks/ParkProvider.js"
import ParkListComponent from "./parks/parkList.js"


getParks().then(
() => ParkListComponent())
>>>>>>> 9098ee4248ec5b33cbc7e5021e8b7a15794e634e
