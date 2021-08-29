function EnterName(){ // this is the MAIN FUNCTION THAT GETS RUN ON THE PAGE
    removeOldText()

    var x = document.getElementById("name").value
    if(!isNaN(x) && (x < 1 || x > 898)) { 
        incorrectId();
    }
    else{
    getPokemon(x)
    }
}

function removeOldText(){ // removes the text generated from previous button press
    let oldImage = document.getElementById("pokemonImage")
    let oldName = document.getElementById("pokemonName")
    let oldError = document.getElementById("errorMessage")

    if(oldImage && oldName) {
        oldImage.remove()
        oldName.remove()
    } if (oldError) {
        oldError.remove()
    }
}

function incorrectId(){ // gives error message for id number
        let errorMessage = document.createElement('p')
        errorMessage.innerHTML = 'that number is either too big or too small'
        const divName = document.createElement('div')
        divName.appendChild(errorMessage)
        divName.id = "errorMessage"
        document.body.appendChild(divName)
}

function getPokemon(input){ // gets the image of the pokemon and displays it on the screen with its name below it
    let urlString = `https://pokeapi.co/api/v2/pokemon/${input}`
    fetch(urlString)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const pokemon = {}
        pokemon['name'] = data.name
        pokemon['sprite'] = data.sprites['front_default']
        console.log(`the pokemons name is ${pokemon.name}`)

        const divPic = document.createElement('div')
        const elem = document.createElement('img')
        elem.src = pokemon['sprite']
        elem.alt = "picture"
        divPic.appendChild(elem)
        divPic.id = "pokemonImage"
        document.body.appendChild(divPic)


        let theName = document.createElement('p')
        theName.innerHTML = pokemon.name
        const divName = document.createElement('div')
        divName.appendChild(theName)
        divName.id = "pokemonName"
        document.body.appendChild(divName)
    }) 
}
