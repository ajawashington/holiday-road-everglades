import { regionSelect } from "./regions/regionSelect.js";
import { useRegions, getAttractions} from "./regions/regionsProvider.js";
import { selectedRegion } from "./regions/regionComponent.js";
import EateryList from "./eateries/EateryList.js";
import { getEateries } from "./eateries/EateryProvider.js"
import ParkDialogComponent from "./dialogs/dialogs.js";





// getAttractions().then( 
//     () => 
//     AttractionListComponent()
    
// )
// getItineraries()
selectedRegion()
useRegions()
regionSelect()
// EateryList()
getEateries()
ParkDialogComponent()
