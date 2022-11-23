import { pokemons, todoPokedex } from '../data'
import { capitalize } from '../commonFunctions'

let instance = null

export class PokeService {
  POKEDEX_API = 'https://pokeapi.co/api/v2/pokedex/30/'

  async getPokemons() {
    const json = await this.sendRequest(this.POKEDEX_API);
    const newData = json.pokemon_entries.map(pokemonEntry => {return {
      name: pokemonEntry.pokemon_species.name,
      url: pokemonEntry.pokemon_species.url,
      index: pokemonEntry.entry_number,
      locations: this.getAddedPokemonData(pokemonEntry.entry_number).location,
      specialConditions: this.getAddedPokemonData(pokemonEntry.entry_number).specialCondition,
      toDos: this.getAddedPokemonData(pokemonEntry.entry_number).toDos,
    }})

    /* TODO: fetched2
    const fetched2 = newData.map(pokemon => {
      pokemon = {
        ...pokemon,
        fetched: this.sendRequest(pokemon.url)
      }
    })*/
    return newData;
  }

  async sendRequest(pokedexapi) {
    const response = await fetch(pokedexapi)
    return await response.json();
  }

  static getInstance() {
    if (instance !== null) {
      return instance
    }
    instance = new PokeService()
    return instance
  }

  async getPokemonData(urlPokemon, index) {
    const response = await this.sendRequest(urlPokemon)
    const hisuiPokemon = this.checkHusuiPokemon(response.varieties)
    const fetchedHisuiPokemon = await this.getPokemon(hisuiPokemon)
    return {
      evolutionChain : response.evolution_chain,
      evolutionFrom : response.evolves_from_species,
      hisuiPokemon: this.checkHusuiPokemon(response.varieties),
      newHisuiPokemon: fetchedHisuiPokemon.data,
      locations: this.getAddedPokemonData(index).location,
      specialConditions: this.getAddedPokemonData(index).specialCondition,
      toDos: this.getAddedPokemonData(index).toDos,
    }
  }

  checkHusuiPokemon(varieties){
    const foundHusui = varieties.filter(item => item.pokemon.name.includes('hisui'))
    if (foundHusui.length === 0) return varieties[0].pokemon.url
    else return foundHusui[0].pokemon.url
  }

  getAddedPokemonData(id){
    return pokemons.find(pokemon => pokemon.id === id)
  }

  async getPokemon(url) {
    const data = await this.sendRequest(url)
    return {data, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`, types: data.types}
  }

  async getTypePokemon(url) {
    const data = await this.sendRequest(url)
    let spanishType = data.names.filter(item => item.language.name === 'es')
    return {name: spanishType[0].name, image: `https://rerollcdn.com/ARCEUS/Types/${capitalize(data.name)}.svg`}
  }

  getTodoPokedexText(id){
    return todoPokedex.find(tarea => tarea.id === id)
  }

  async getEvolutionData(url){
    const data = await this.sendRequest(url)
    return data.chain
  }
}