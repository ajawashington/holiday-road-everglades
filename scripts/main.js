import { regionSelect } from "./regions/regionSelect.js";
import { useRegions, getRegions, getParksbyRegion } from "./regions/regionsProvider.js";
import { selectedRegion } from "./regions/regionComponent.js";
import { getParks, useParks } from "./parks/ParkProvider.js"
import ParkListComponent from "./parks/parkList.js"

selectedRegion()
getRegions().then(selectedRegion).then(getParksbyRegion)
useRegions()
regionSelect()
useParks()
getParks().then(
() => ParkListComponent())
