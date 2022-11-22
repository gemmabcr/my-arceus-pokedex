import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonListContainer, LogoArceus, PokemonListContent } from './PokemonListStyled'
import { FlexRow } from '../../commonStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { pokemonLogo } from '../../data'
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
      <h1>This is my tracking list of my Pokedex</h1>
      <LogoArceus src={pokemonLogo} alt='Pokemon Leyendas: Arceus' />
      <FlexRow>
        <h3>All Hisui</h3>
      </FlexRow>
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
