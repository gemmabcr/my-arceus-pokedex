import React from 'react'
import { FlexColumn, FlexRow, LocationImage } from '../../../../commonStyled'
import { LocationsGridItem } from '../PokemonLocationInfoStyled'

const LocationsGrid = ({locations, logo, text}) => {
  return (
    <LocationsGridItem>
      <FlexRow>
        <LocationImage src={logo} alt={text}  />
        <h5>{text}</h5>
      </FlexRow>
      <FlexColumn>
        {locations.map(location => <span key={location.id}>{location.name}</span> )}
      </FlexColumn>
    </LocationsGridItem>
  )
}

export default LocationsGrid