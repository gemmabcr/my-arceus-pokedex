import React from 'react'
import { FlexColumn } from '../../../commonStyled'
import ShowPokedex from '../../ShowPokedex/ShowPokedex'

const PokemonLine = ({ hisuiPokedex, setHisuiPokedex, myTeam }) => {
  const sortedTeam = myTeam.sort((a, b) => a - b)
  const renderTeam = sortedTeam.map(index => hisuiPokedex.find(pokemon => pokemon.index === index))

  return (
    <FlexColumn>
      {renderTeam.length > 0 &&
        <ShowPokedex
          hisuiPokedex={renderTeam}
          setHisuiPokedex={setHisuiPokedex}
        />
      }
    </FlexColumn>
  )
}

export default PokemonLine
