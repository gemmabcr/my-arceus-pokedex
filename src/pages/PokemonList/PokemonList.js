import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import {PokeService} from '../../service/pokeService'

const PokemonList = () => {
  const [hisuiPokedex, setHisuiPokedex] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = PokeService.getInstance()
    pokeService.getPokemons()
      .then(data => setHisuiPokedex(data))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
  },[])

  return (
    <PokemonListContainer>
      <h3>Pokémons de Hisui</h3>
      {loading && <p>Loading... </p>}
      {!loading &&
        <PokemonListContent>
          {hisuiPokedex.map(pokemon =>
            <Link
              key={pokemon.entry_number}
              to={`/pokemon/${pokemon.entry_number}`}
              state={{ urlPokemon: pokemon.pokemon_species.url, index: pokemon.entry_number }}
            >
              <PokemonCard
                urlPokemon={pokemon.pokemon_species.url}
                index={pokemon.entry_number}
              />
            </Link>
          )}
        </PokemonListContent>
      }
    </PokemonListContainer>
  )
}

export default PokemonList
