let randomValue = 0
let totalPokemon = 0
let pctPokemon = 0
let pokemonCaught = 0
totalPokemon = 2

function catchPokemon() {
    randomValue = Math.randomRange(1, 6)
    if (randomValue == 1) {
        pokemonCaught = pokemonCaught + 1
        console.log(`Pokémon has been caught, you have ${pokemonCaught} Pokémons.`)
    } else {
        console.log(`Pokémon ran away, you have ${pokemonCaught} Pokémons.`)
    }
}

input.buttonA.onEvent(ButtonEvent.Click, function () {
    if (pokemonCaught >= totalPokemon) {
        console.log("You have caught all Pokémon!")
    } else {
        catchPokemon()
    }
})

input.buttonB.onEvent(ButtonEvent.Click, function () {
    if (pokemonCaught >= totalPokemon) {
        console.log("You have caught all Pokémon!")
    } else {
        pctPokemon = Math.round(pokemonCaught / totalPokemon * 100)
        console.log(`You have Caught ${pokemonCaught} Pokémon of the ${totalPokemon} Pokémon, this is ${pctPokemon}%.`)
    }
})
