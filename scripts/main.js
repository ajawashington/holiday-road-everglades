import { regionSelect } from "./regions/regionSelect.js";
import { useRegions} from "./regions/regionsProvider.js";
import { selectedRegion } from "./regions/regionComponent.js";
import EateryList from "./eateries/EateryList.js";
import { getEateries } from "./eateries/EateryProvider.js"
import ParkDialogComponent from "./dialogs/EateryDialogs.js";



selectedRegion()
useRegions()
regionSelect()
// EateryList()
getEateries()
ParkDialogComponent()
