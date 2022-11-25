import React from 'react'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const PokemonList = ({loading, hisuiPokedex, setHisuiPokedex}) => {
  return (
    <PokemonListContainer>
      <h3>Pokémons de Hisui</h3>
      {loading && <Loading />}
      {!loading &&
        <PokemonListContent>
          {hisuiPokedex.map(pokemon =>
            <PokemonCard
              key={pokemon.index}
              urlPokemon={pokemon.url}
              index={pokemon.index}
              todos={pokemon.toDos}
              setHisuiPokedex={setHisuiPokedex}
              hisuiPokedex={hisuiPokedex}
            />
          )}
        </PokemonListContent>
      }
    </PokemonListContainer>
  )
}

export default PokemonList
