import React from 'react'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import Loading from '../../components/Loading/Loading'
import { areaText } from '../../data'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'

const DistorsionList = ({firstLoading, hisuiPokedex, setHisuiPokedex}) => {
  const distorsionText = areaText.distorsion
  const costaPokedex = hisuiPokedex.filter(pokemon =>{
    return pokemon.locations.find(location => location.area === distorsionText)
  })

  return (
    <PokemonListContainer>
      <PageAreaTitle area={distorsionText} />
      {firstLoading && <Loading />}
      {!firstLoading &&
        <PokemonListContent>
          {costaPokedex.map(pokemon =>
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

export default DistorsionList
