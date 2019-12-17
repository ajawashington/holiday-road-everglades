console.log("****Eateries Provider module code****")

let eateries = []

export const useEateries = () => {
    return eateries
}

export const getEateries = () => {
  
  console.log("****I am going to get the eateries data****")

    return fetch("http://holidayroad.nss.team/eateries")
        .then(response => response.json())
        .then(

            parsedEateries => {
                console.table(parsedEateries)

                console.log("****I have the eateries data****")
                eateries = parsedEateries.slice()

            }
        )
}
