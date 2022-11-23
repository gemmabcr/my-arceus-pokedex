import React from 'react'
import { FlexColumn, FlexRow } from '../../../commonStyled'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'

const PokemonSpecialConditionInfo = ({conditions}) => {
  return (
    <PokemonDetailContent>
      <h3>Special Condition</h3>
      {/*<FlexRow>
          <h5>Time:</h5>
          {conditions.time.map((time, index) =>
            <span key={time.id}>{time.name}{index !== conditions.time.length-1 && ', '}</span>
          )}
        </FlexRow>

        TODO: Fix weather conditions
        {conditions.weather.length > 0 &&
        <FlexRow>
          <h5>Weather:</h5>
          {conditions.weather.map((weather, index) =>
            <span key={weather.id}>{weather.name}{index !== conditions.weather.length-1 && ', '}</span>
          )}
        </FlexRow>
      }*/}
    </PokemonDetailContent>
  )
}

export default PokemonSpecialConditionInfo