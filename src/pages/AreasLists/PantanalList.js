import React from 'react'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Loading from '../../components/Loading/Loading'
import { areaText } from '../../data'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'

const PantanalList = ({firstLoading, hisuiPokedex, setHisuiPokedex}) => {
  const pantanalText = areaText.pantanal
  const pantanalPokedex = hisuiPokedex.filter(pokemon =>{
    return pokemon.locations.find(location => location.area === pantanalText)
  })

  return (
    <PokemonListContainer>
      <PageAreaTitle area={pantanalText} />
      {firstLoading && <Loading />}
      {!firstLoading &&
        <PokemonListContent>
          {pantanalPokedex.map(pokemon =>
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

export default PantanalList
