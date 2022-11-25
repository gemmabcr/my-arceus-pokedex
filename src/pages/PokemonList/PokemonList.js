import React from 'react'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'

const PokemonList = ({firstLoading, hisuiPokedex, setHisuiPokedex, area = 'Hisui'}) => {
  return (
    <PokemonListContainer>
      <PageAreaTitle area={area} />
      {firstLoading && <Loading />}
      {!firstLoading &&
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
