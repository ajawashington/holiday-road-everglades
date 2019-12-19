import { useEateries } from "../eateries/EateryProvider.js";



const eventHub = document.querySelector(".container");
const contentTarget = document.querySelector(".attractionList_eateries")

const ParkDialogComponent = () => {
  eventHub.addEventListener("click", event => {
    if(event.target.id.startsWith("open--")){
      const eateries = useEateries()
      const foundEatery = eateries.find(
        (singleEatery) => {
          return singleEatery.state === event.target.id.split("--")[1]
        }
      )
     
      const dialogSiblingSelector = `#${event.target.id}+dialog`;
      console.log(dialogSiblingSelector)
      const theDialog = document.querySelector(dialogSiblingSelector);
      theDialog.showModal();


      const eateryHTML = `
             <div>
               <strong>${foundEatery.businessName}</strong>
               ${foundEatery.city}, ${foundEatery.state}
               ${foundEatery.description}
             </div>
           `
       document.querySelector(".attractionList_attractions").innerHTML = eateryHTML
       console.log(eateryHTML)
    }

    if(event.target.id.startsWith("close--")) {
      const dialogElement = event.target.parentNode;
      dialogElement.close();
    }
  }) 
}
export default ParkDialogComponent