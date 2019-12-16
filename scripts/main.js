import { getParks } from "./parks/ParkProvider.js";
import { parkSelect } from "./parks/parkSelect.js";


getParks().then(
() => parkSelect())
