import React from 'react'
import {FlexRow, LocationImage} from '../../commonStyled'
import { areasLogos, areaText } from '../../data'

function getSource(area){
  switch (area) {
    case areaText.pradera:
      return areasLogos.praderaObsidiana
    case areaText.pantanal:
      return areasLogos.pantanalCarmesi
    case areaText.costa:
      return areasLogos.costaCobalto
    case areaText.ladera:
      return areasLogos.laderaCorona
    case areaText.tundra:
      return areasLogos.tundraAlba
    case areaText.distorsion:
      return areasLogos.distorsionEspaciotemporal
    default:
      return 'Hisui'
  }
}

const PageAreaTitle = ({area}) =>
   (
    <FlexRow>
      <h3>Pokémons de</h3>
      {area !== 'Hisui' &&
        <LocationImage src={getSource(area)} alt={area} />
      }
      <h3>{area}</h3>
    </FlexRow>
  )

export default PageAreaTitle