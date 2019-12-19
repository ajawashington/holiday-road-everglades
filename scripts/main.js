import { regionSelect } from "./regions/regionSelect.js";
import { useRegions, getAttractions} from "./regions/regionsProvider.js";
import { selectedRegion } from "./regions/regionComponent.js";
import { getItineraries } from "./itineraries/itineraryProvider.js";
import ItineraryListComponent from "./itineraries/ItineraryList.js";
import { AttractionListComponent } from "./attractions/AttractionList.js";



getAttractions().then( 
    () => 
    AttractionListComponent()
    
)
getItineraries()
selectedRegion()
useRegions()
regionSelect()
