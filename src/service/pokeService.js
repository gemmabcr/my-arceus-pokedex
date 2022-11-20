let instance = null

export class PokeService {
  POKEDEX_API = 'https://pokeapi.co/api/v2/pokedex/30/'

  async getPokemons() {
    const json = await this.sendRequest(this.POKEDEX_API);
    return json.pokemon_entries
  }

  async sendRequest(pokedexapi) {
    const response = await fetch(pokedexapi)
    return await response.json();
  }

  async getPokemonEvolution(urlPokemon) {
    const response = await this.sendRequest(urlPokemon)
    return {evolution : response.evolution_chain, hisuiPokemon: this.checkHusuiPokemon(response.varieties)}
  }

  checkHusuiPokemon(varieties){
    const foundHusui = varieties.filter(item => item.pokemon.name.includes('hisui'))
    if (foundHusui.length === 0) return varieties[0].pokemon.url
    else return foundHusui[0].pokemon.url
  }

  static getInstance() {
    if (instance !== null) {
      return instance
    }
    instance = new PokeService()
    return instance
  }

  async getPokemon(url) {
    const data = await this.sendRequest(url)
    return {data, image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`, types: data.types}
  }

  getTareas(id) {

  }
}