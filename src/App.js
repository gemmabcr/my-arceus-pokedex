import {pokemons} from './data'
import PokemonCard from "./components/PokemonCard/PokemonCard";

function App() {
  const sortedArray = pokemons.sort((a,b) => a.hisuiPokedexNum - b.hisuiPokedexNum)
  console.log(sortedArray)
  return (
    <div>
      <h1>This is my tracking list of my arceus pokedex</h1>
      <div className='pokemonList'>
        {sortedArray.map(pokemon => <PokemonCard pokemon={pokemon} key={pokemon.hisuiPokedexNum} />)}
      </div>
    </div>
  );
}

export default App;
