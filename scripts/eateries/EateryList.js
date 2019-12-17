import EateryComponent from "./EateryComponent.js";
import { useEateries } from "./EateryProvider.js";



console.log("****I am the Eatery List Module****");

const eventHub = document.querySelector(".container");
const contentElement = document.querySelector(".eateriesContainer")

const EateryList = () => {
  
  const eateryCollection = useEateries();
  console.log(eateryCollection, "here they are");

  eventHub.addEventListener("eaterySelected", event => {
    const eatery = event.detail.eatery

    const matchingEateries = eateryCollection.filter(
      (currentEatery) => {
        if (currentEatery.businessName){
          return currentEatery
        }
      }
    )
      console.table(matchingEateries)
      if (matchingEateries.length > 0) {
        render (matchingEateries)
      } else {
        render(eateryCollection)
      }
    }
)

  let render = eateryCollection => {
    contentElement.innerHTML = `${eateryCollection
      .map(currentEatery => {
        return EateryComponent(currentEatery)
      })
      .join("")}`;
  };

  render(eateryCollection)
};

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id.startsWith("eateries--")){

    const eateryId = clickEvent.target.id

    const message = new CustomEvent("eateryButtonClicked", {
      detail: {
        eateryId: indexId
      }
    })
    eventHub.dispatchEvent(message)
  }
}
)

export default EateryList