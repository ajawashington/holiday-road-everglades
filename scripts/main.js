<<<<<<< HEAD
import getParks from "./parks/ParkSelect";

getParks()
=======
import { getParks } from "./parks/ParkProvider.js";
import { parkSelect } from "./parks/parkSelect.js";


getParks().then(
() => parkSelect())
>>>>>>> master
