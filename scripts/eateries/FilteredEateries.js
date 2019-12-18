import { useEateries } from "./EateryProvider"

export const eateryFilter = () => {

  const eateries = useEateries()

  eventHub.addEventListener("click", clickEvent => {

      const matchingEateries = eateries.filter(
          (currentEatery) => {
              if (button.id === state) {
                  return currentEatery
              }
          }
      )
      render(matchingEateries)
  })
  const render = (eateries) => {
      getEateriesByState(eateries[0].states)
  }
}