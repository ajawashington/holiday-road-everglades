<<<<<<< HEAD
import { keys } from "../Settings.js"



=======
>>>>>>> dbb5d3515c01ac52500f1311f784dbe72e29bf0c
let parks = []

export const useParks = () => parks


export const getParks = () => { 
    console.log ("***I am fetching the parks***")
return fetch ('https://developer.nps.gov/api/v1/parks?api_key=e7nUtP2jRRovkoLURmKzkGQAqyIbCktiHsgdj9Yx')
  .then(response => response.json())
  .then(
      parsedParks => {

    parks = parsedParks

            }

)

}


