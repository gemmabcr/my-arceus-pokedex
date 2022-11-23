import React from 'react'
import { areasLogos } from '../../../data'
import { FlexRow } from '../../../commonStyled'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'

const PokemonLocationInfo = ({locations}) => {
  return (
    <PokemonDetailContent>
      <h3>Localización</h3>
      <FlexRow>
        <img src={areasLogos.praderaObsidiana} alt='Pradera Obsidiana' width={24} height={24} />
        <h5>Pradera Obsidiana</h5>
      </FlexRow>
      <FlexRow>
        {locations.map((location, index) =>
          <span key={location.id}>{location.name}{index !== locations.length-1 && ', '}</span>
        )}
      </FlexRow>
    </PokemonDetailContent>
  )
}

export default PokemonLocationInfo