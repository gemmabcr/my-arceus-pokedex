import React from 'react'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Loading from '../../components/Loading/Loading'
import { areaText } from '../../data'

const PraderaList = ({firstLoading, hisuiPokedex, setHisuiPokedex}) => {
  const praderaText = areaText.pradera
  const praderaPokedex = hisuiPokedex.filter(pokemon =>{
    return pokemon.locations.find(location => location.area === praderaText)
  })

  return (
    <PokemonListContainer>
      <h3>Pokémons de {praderaText}</h3>
      {firstLoading && <Loading />}
      {!firstLoading &&
        <PokemonListContent>
          {praderaPokedex.map(pokemon =>
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

export default PraderaList
