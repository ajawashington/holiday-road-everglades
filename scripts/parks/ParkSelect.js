let parks = []

export const useParks = () => parks


export const getParks = () => { 
    console.log ("these are my parks")
return fetch ('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=e7nUtP2jRRovkoLURmKzkGQAqyIbCktiHsgdj9Yx', {
  method: "GET",
  headers: {"Accept": "application/json"
}
})
  .then(response => response.json())
  .then(parsedParks => {
    console.log("**** I am 100% sure that I have he data ****")
    parks = parsedParks.slice()
})

}


let parks = []

export const useParks = () => {
return parks 
}


export const getParks = () => { 
    console.log ("***I am fetching the parks***")
return fetch ('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=e7nUtP2jRRovkoLURmKzkGQAqyIbCktiHsgdj9Yx')
  .then(response => response.json())
  .then(
      parsedParks => {

    parks = parsedParks.slice()

            }

)

}

export default getParks 