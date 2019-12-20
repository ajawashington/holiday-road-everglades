import { regionSelect } from "./regions/regionSelect.js";
import { useRegions} from "./regions/regionsProvider.js";
import { selectedRegion } from "./regions/regionComponent.js";

import { getEateries } from "./eateries/EateryProvider.js"
import { getAttractions } from "./attractions/AttractionProvider.js";
import ParkDialogComponent from "./dialogs/ParkDialogs.js";






selectedRegion()
useRegions()
regionSelect()

getEateries()
getAttractions()

ParkDialogComponent()
