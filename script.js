//  ---- PROJETO REAL POKEDEX (https://pokeapi.co/) ----
// CAMPOS DE BUSCA
// TELA DE EXIBIÇÃO
// NOME E TIPO

// CHAMADAS GENÉRICAS
function WhatPokemon(){
    nome = $("#inputname").val()
    return nome
}
async function PegarPokemon(pokemon){
    var PokeApi = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    var pokemons = await axios(PokeApi)
    var pokemondata = pokemons.data   
    return pokemondata
}
async function PegarNomePokemon(pokemondata){
    var pokeName = pokemondata.name
    return pokeName
}
async function PegarTipoPokemon(pokemondata){
    var tipos = pokemondata.types
    var tiposindex = tipos[0]
    var tipo = tiposindex.type
    var pokeType = tipo.name
    return pokeType
}
async function PegarImagemPokemon(pokeID){
    imagemurl = await `https://veekun.com/dex/media/pokemon/main-sprites/ultra-sun-ultra-moon/${pokeID}.png`
    return imagemurl
}
// CHAMADAS ESPECIFICAS
async function MostrarPokemon(){
    pokemon = await WhatPokemon();
    pokemondata = await PegarPokemon(pokemon)
    pokename = await PegarNomePokemon(pokemondata);
    poketype = await PegarTipoPokemon(pokemondata);
    pokeimg = await PegarImagemPokemon(pokemondata.id);
    $("#pokecard").html(`
    <img class="pokeimg" src="${pokeimg}">
    <div id="pokenome">
    <h2 class="pokeinfo">${pokename}</h2>
    </div>
    <div id="poketipo">
    <h2 class="pokeinfo">${poketype}</h2>
    </div>
    `)
}
// CHAMADA GLOBAL


// funcoes a fazer

// = pokemon
// = Tipo
// = Id
// = imagem    `https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`