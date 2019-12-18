const EateryComponent = (eateries) => {
  return `
  <section class="content__eateries highlight">
    <dialog class="content__eateries dialog eatery_dialog">
      <section class="eatery__content">
        <ul>
          <span class="thumbnail">
            <li>${eateries.businessName}</li>
            <span>
              <image class="info-pic-size" src="" alt="" />
              <br>
              <h4>${eateries.businessName}</h4>
              <h5>${eateries.city}, ${eateries.state}</h5>
              <p>${eateries.description}</p>
            </span>
          </span>
        </ul>
      </section>
      </dialog>
  </section>
  `
}

export default EateryComponent