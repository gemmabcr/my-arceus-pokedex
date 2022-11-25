import React from 'react'
import { areasLogos, areaText } from '../../../data'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import { LocationsContainer } from './PokemonLocationInfoStyled'
import LocationsGrid from './LocationsGrid/LocationsGrid'

const PokemonLocationInfo = ({locations}) => {
  const [praderaLocations, setPraderaLocations] = React.useState([])
  const [pantanalLocations, setPantanalLocations] = React.useState([])
  const [costaLocations, setCostaLocations] = React.useState([])
  const [laderaLocations, setLaderaLocations] = React.useState([])
  const [tundraLocations, setTundraLocations] = React.useState([])
  const [distorsionLocations, setDistorsionLocations] = React.useState([])

  React.useEffect(()=>{
    let pradera = [], pantanal = [], costa = [], ladera = [], tundra = [], distorsion = [];
    locations.forEach(location => {
      switch (location.area) {
        case areaText.pradera:
          pradera.push(location)
          break
        case areaText.pantanal:
          pantanal.push(location)
          break
        case areaText.costa:
          costa.push(location)
          break
        case areaText.ladera:
          ladera.push(location)
          break
        case areaText.tundra:
          tundra.push(location)
          break
        default:
          distorsion.push(location)
          break
      }
      setPraderaLocations(pradera)
      setPantanalLocations(pantanal)
      setCostaLocations(costa)
      setLaderaLocations(ladera)
      setTundraLocations(tundra)
      setDistorsionLocations(distorsion)
    })
  }, [locations])

  return (
    <PokemonDetailContent>
      <h3>Localización</h3>
      <LocationsContainer>
        {praderaLocations.length > 0 &&
          <LocationsGrid
            locations={praderaLocations}
            logo={areasLogos.praderaObsidiana}
            text={areaText.pradera}
          />
        }
        {pantanalLocations.length > 0 &&
          <LocationsGrid
            locations={pantanalLocations}
            logo={areasLogos.pantanalCarmesi}
            text={areaText.pantanal}
          />
        }
        {costaLocations.length > 0 &&
          <LocationsGrid
            locations={costaLocations}
            logo={areasLogos.costaCobalto}
            text={areaText.costa}
          />
        }
        {laderaLocations.length > 0 &&
          <LocationsGrid
            locations={laderaLocations}
            logo={areasLogos.laderaCorona}
            text={areaText.ladera}
          />
        }
        {tundraLocations.length > 0 &&
          <LocationsGrid
            locations={tundraLocations}
            logo={areasLogos.tundraAlba}
            text={areaText.tundra}
          />
        }
        {distorsionLocations.length > 0 &&
          <LocationsGrid
            locations={distorsionLocations}
            logo={areasLogos.distorsionEspaciotemporal}
            text={areaText.distorsion}
          />
        }
      </LocationsContainer>
    </PokemonDetailContent>
  )
}

export default PokemonLocationInfo