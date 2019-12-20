import { regionSelect } from "./regions/regionSelect.js";
import { useRegions, getAttractions} from "./regions/regionsProvider.js";
import { selectedRegion } from "./regions/regionComponent.js";

import { getEateries } from "./eateries/EateryProvider.js"
import ParkDialogComponent from "./dialogs/EateryDialogs.js";






selectedRegion()
useRegions()
regionSelect()

getEateries()
ParkDialogComponent()
