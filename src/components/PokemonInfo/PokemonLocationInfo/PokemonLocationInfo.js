import React from 'react'
import { areasLogos } from '../../../data'
import {FlexColumn, FlexRow} from "../../../commonStyled";

const PokemonLocationInfo = ({locations}) => {
  return (
    <FlexColumn>
      <FlexRow>
        <img src={areasLogos.praderaObsidiana} alt='Pradera Obsidiana' />
        <h3>Pradera Obsidiana</h3>
      </FlexRow>
      <FlexRow>
        {locations.map((location, index) =>
          <span key={location.id}>{location.name}{index !== locations.length-1 && ', '}</span>
        )}
      </FlexRow>
    </FlexColumn>
  )
}

export default PokemonLocationInfo