import { getParks } from "./parks/ParkProvider.js";
import { parkSelect } from "./parks/parkSelect.js";
import { getAttractions, useAttractions } from "./attractions/AttractionProvider.js";
import { AttractionComponent } from "./attractions/Attraction.js";
import { AttractionListComponent } from "./attractions/AttractionList.js";



getAttractions().then( 
    () => 
    AttractionListComponent()
)


getParks().then(
    () => parkSelect()
)
