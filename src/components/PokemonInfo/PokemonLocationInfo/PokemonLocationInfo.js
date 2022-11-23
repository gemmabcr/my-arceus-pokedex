import React from 'react'
import { areasLogos, praderaText, pantanalText, costaText, laderaText, tundraText, distorsionText } from '../../../data'
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
        case praderaText:
          pradera.push(location)
          break
        case pantanalText:
          pantanal.push(location)
          break
        case costaText:
          costa.push(location)
          break
        case laderaText:
          ladera.push(location)
          break
        case tundraText:
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
              <img src={areasLogos.praderaObsidiana} alt={praderaText} width={24} height={24} />
              <h5>{praderaText}</h5>
            </FlexRow>
            <FlexColumn>
              {praderaLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {pantanalLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.pantanalCarmesi} alt={pantanalText} width={24} height={24} />
              <h5>{pantanalText}</h5>
            </FlexRow>
            <FlexColumn>
              {pantanalLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {costaLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.costaCobalto} alt={costaText} width={24} height={24} />
              <h5>{costaText}</h5>
            </FlexRow>
            <FlexColumn>
              {costaLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {laderaLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.laderaCorona} alt={laderaText} width={24} height={24} />
              <h5>{laderaText}</h5>
            </FlexRow>
            <FlexColumn>
              {laderaLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {tundraLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.tundraAlba} alt={tundraText} width={24} height={24} />
              <h5>{tundraText}</h5>
            </FlexRow>
            <FlexColumn>
              {tundraLocations.map(location => <span key={location.id}>{location.name}</span> )}
            </FlexColumn>
          </FlexColumn>
        }
        {distorsionLocations.length > 0 &&
          <FlexColumn>
            <FlexRow>
              <img src={areasLogos.distorsion} alt={distorsionText} width={24} height={24} />
              <h5>{distorsionText}</h5>
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