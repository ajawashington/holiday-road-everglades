const parkComponent = (park) => {
    return `
    <section>
    <div class="park">

    <header class="parkHeader">
     ${park.fullName}
    </header>

    <div> 
   State: ${park.states}
    </div>
    <div>
    Description: ${park.description}
    </div>
    </section>
    `

}

export default parkComponent