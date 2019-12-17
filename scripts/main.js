import { getParks } from "./parks/ParkProvider.js";
import { parkSelect } from "./parks/parkSelect.js";
import { getEateries } from "./eateries/EateryProvider.js";
import EateryList from "./eateries/EateryList.js";



getParks().then(
() => parkSelect())
getEateries()
EateryList()