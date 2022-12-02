import React from 'react'
import PokemonCard from '../../PokemonCard/PokemonCard'
import {FlexColumn} from '../../../commonStyled'

const PokemonLine = ({hisuiPokedex, setHisuiPokedex, myTeam }) => {
  const renderTeam = myTeam.map(index => hisuiPokedex.find(pokemon => pokemon.index === index))
  const sortedTeam = renderTeam.sort((a, b) => a.index - b.index)

  return (
    <FlexColumn>
      {renderTeam.length > 0 && sortedTeam.map(pokemon => {
        return (
          <PokemonCard
            key={pokemon.index}
            urlPokemon={pokemon.url}
            index={pokemon.index}
            todos={pokemon.toDos}
            setHisuiPokedex={setHisuiPokedex}
            hisuiPokedex={hisuiPokedex}
          />
        )
      })}
    </FlexColumn>
  )
}

export default PokemonLine