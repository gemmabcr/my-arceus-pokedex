import React, { Fragment } from 'react'
import {
  checkSimpleEvolution,
  checkThirdInChain,
  checkFirstInChain,
  checkSecondInChain,
  getSecondEvolution,
  getFirstEvolution,
  checkFirstEvolutionDetails,
  getFirstEvolutionLevel
} from './EvolutionFunctions'
import { FlexRow } from '../../commonStyled'
import { capitalize } from '../../commonFunctions'

const PokemonEvolutionInfo = ({urlEvolutionData, namePokemon}) => {
  const [loading, setLoading] = React.useState(true)
  const [evolutionData, setEvolutionData] = React.useState([])

  React.useEffect(()=>{
    fetch(urlEvolutionData)
      .then((response)=>response.json())
      .then(data=>setEvolutionData(data.chain))
      .catch(error=>console.log(error))
      .finally(()=>{setLoading(false)})
  }, [urlEvolutionData])

  //console.log(evolutionData)

  return (
    <Fragment>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FlexRow>
          {checkSimpleEvolution(evolutionData) &&
            checkFirstInChain(namePokemon, evolutionData) &&
            <FlexRow>
              <p>Evoluciona a {getFirstEvolution(evolutionData)}</p>
              {checkFirstEvolutionDetails(evolutionData) &&
                <p>al nivel {getFirstEvolutionLevel(evolutionData)}</p>
              }
            </FlexRow>
          }
          {checkSimpleEvolution(evolutionData) &&
            checkSecondInChain(namePokemon, evolutionData) &&
            checkThirdInChain(evolutionData) &&
            <FlexRow>
              <p>Evoluciona a {getSecondEvolution(evolutionData)}</p>
              {evolutionData.evolves_to[0].evolves_to[0].evolution_details[0] && <p>al nivel {evolutionData.evolves_to[0].evolves_to[0].evolution_details[0].min_level}</p>}
            </FlexRow>
          }
          {!checkSimpleEvolution(evolutionData) && evolutionData.species.name === namePokemon &&
            <div>
              <p>Evoluciona a</p>
              {evolutionData.evolves_to.map((evolution, i) =>
                <FlexRow key={i}>
                  <p>{capitalize(evolution.species.name)}</p>
                  <p>Forma: {evolution.evolution_details[0].trigger.name}</p>
                </FlexRow>
              )}
            </div>
          }
        </FlexRow>
      }
    </Fragment>
  )
}

export default PokemonEvolutionInfo