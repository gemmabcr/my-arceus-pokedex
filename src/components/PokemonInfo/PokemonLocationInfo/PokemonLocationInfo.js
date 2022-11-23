import React from 'react'
import { areasLogos, areaText } from '../../../data'
import { FlexColumn, FlexRow } from '../../../commonStyled'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import { LocationsContainer } from './PokemonLocationInfoStyled'

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
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.praderaObsidiana} alt={areaText.pradera} width={24} height={24} />
              <h5>{areaText.pradera}</h5>
            </FlexRow>
            <FlexColumn>
              {praderaLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {pantanalLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.pantanalCarmesi} alt={areaText.pantanal} width={24} height={24} />
              <h5>{areaText.pantanal}</h5>
            </FlexRow>
            <FlexColumn>
              {pantanalLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {costaLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.costaCobalto} alt={areaText.costa} width={24} height={24} />
              <h5>{areaText.costa}</h5>
            </FlexRow>
            <FlexColumn>
              {costaLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {laderaLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.laderaCorona} alt={areaText.ladera} width={24} height={24} />
              <h5>{areaText.ladera}</h5>
            </FlexRow>
            <FlexColumn>
              {laderaLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {tundraLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.tundraAlba} alt={areaText.tundra} width={24} height={24} />
              <h5>{areaText.tundra}</h5>
            </FlexRow>
            <FlexColumn>
              {tundraLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {distorsionLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.distorsion} alt={areaText.distorsion} width={24} height={24} />
              <h5>{areaText.distorsion}</h5>
            </FlexRow>
            <FlexColumn>
              {distorsionLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
      </LocationsContainer>
    </PokemonDetailContent>
  )
}

export default PokemonLocationInfo