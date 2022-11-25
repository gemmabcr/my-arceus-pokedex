import React from 'react'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Loading from '../../components/Loading/Loading'
import { areaText } from '../../data'

const LaderaList = ({loading, hisuiPokedex}) => {
  const laderaText = areaText.ladera
  const costaPokedex = hisuiPokedex.filter(pokemon =>{
    return pokemon.locations.find(location => location.area === laderaText)
  })

  return (
    <PokemonListContainer>
      <h3>Pokémons de {laderaText}</h3>
      {loading && <Loading />}
      {!loading &&
        <PokemonListContent>
          {costaPokedex.map(pokemon =>
            <PokemonCard
              key={pokemon.index}
              urlPokemon={pokemon.url}
              index={pokemon.index}
              todos={pokemon.toDos}
            />
          )}
        </PokemonListContent>
      }
    </PokemonListContainer>
  )
}

export default LaderaList
