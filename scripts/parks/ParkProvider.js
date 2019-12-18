<<<<<<< HEAD
=======
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


>>>>>>> 9098ee4248ec5b33cbc7e5021e8b7a15794e634e
