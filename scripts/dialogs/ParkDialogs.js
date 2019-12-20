import { useEateries } from "../eateries/EateryProvider.js";
import { useAttractions } from "../attractions/AttractionProvider.js";



// Need to figure out how to query select the div in park.js using the interpolated string for each state, on each button; current method is not working

const eventHub = document.querySelector(".container");

const ParkDialogComponent = () => {
  eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("open--")){
      const [prefix, code] = event.target.id.split("--")
      const theDialog = document.querySelector(`.attractionList_attractions_${code}`)

      const eateries = useEateries()
      const foundEatery = eateries.find(
        (singleEatery) => {
          return singleEatery.state === event.target.id.split("--")[1]
        }
      )

      const bizzarie = useAttractions()
      const foundBizzarie = bizzarie.find(
        (singleBizzarie) => {
          return singleBizzarie.state === event.target.id.split("--")[1]
        }
      )
     
      theDialog.showModal();


      const eateryHTML = `
        <div>
          <strong>${foundEatery.businessName}</strong>
          ${foundEatery.city}, ${foundEatery.state}
          ${foundEatery.description}
        </div>
      `
       document.querySelector(`.attractionList_eateries_${code}`).innerHTML = eateryHTML
       console.log(eateryHTML)

       const bizzarieHTML = `
       <div>
         <h4>${foundBizzarie.name}</h4>
         <h5>${foundBizzarie.city}, ${foundBizzarie.state}</h5>
         <p>${foundBizzarie.description}</p>
       </div>
     `
      document.querySelector(`.attractionList_bizzaries_${code}`).innerHTML = bizzarieHTML
      console.log(bizzarieHTML)
  
       
    }

    if(event.target.id.startsWith("close--")) {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    }
  }) 
}
export default ParkDialogComponent

// For popup of Eatery information if time allows
// 
// const popUp = document.querySelectorAll(".popUp");
// popUp.forEach(pop => {
//   pop.addEventListener("click", event => {
//     const dialogElement = event;
//     dialogElement.showModal();
//   });
// });