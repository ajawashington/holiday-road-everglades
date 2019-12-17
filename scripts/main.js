import { regionSelect } from "./regions /regionSelect.js";
import { useParks, getParks, getAttractions, getEateries, getParksbyRegion } from "./regions /regionsProvider.js";
import { selectedRegion } from "./regions /regionComponent.js";

getParks().then(selectedRegion)
useParks()
getParksbyRegion()
regionSelect()
getAttractions ()
getEateries ()
selectedRegion ()