import React from 'react'
import { FlexRow } from '../../../commonStyled'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'

const PokemonSpecialConditionInfo = ({conditions}) => {
  function checkPlentyConditions(){
    return conditions[0].name !== undefined
  }

  return (
    <PokemonDetailContent>
      <h3>Special Condition</h3>
      {checkPlentyConditions() && conditions.map((specialCondition, indexSpecial) =>
        <FlexRow key={indexSpecial}>
          <h5>{specialCondition.name}</h5>
          <FlexRow>
            {specialCondition.conditions.map((condition, index) =>
              <span key={condition.id}>{condition.name}{index !== specialCondition.conditions.length-1 && ', '}</span>
            )}
          </FlexRow>
        </FlexRow>
      )}
      {!checkPlentyConditions() && <p>No special conditions</p>}
    </PokemonDetailContent>
  )
}

export default PokemonSpecialConditionInfo