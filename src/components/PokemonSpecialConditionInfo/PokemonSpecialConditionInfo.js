import React from 'react'
import { FlexColumn, FlexRow } from '../../commonStyled'

const PokemonSpecialConditionInfo = ({conditions}) => {
  return (
    <FlexColumn>
      <h3>Special Condition</h3>
      {conditions.time.length > 0 &&
        <FlexRow>
          <h5>Time:</h5>
          {conditions.time.map((time, index) =>
            <span key={time.id}>{time.name}{index !== conditions.time.length-1 && ', '}</span>
          )}
        </FlexRow>
      }
      {conditions.weather.length > 0 &&
        <FlexRow>
          {/*TODO: Fix weather conditions*/}
          <h5>Weather:</h5>
          {conditions.weather.map((weather, index) =>
            <span key={weather.id}>{weather.name}{index !== conditions.weather.length-1 && ', '}</span>
          )}
        </FlexRow>
      }
    </FlexColumn>
  )
}

export default PokemonSpecialConditionInfo