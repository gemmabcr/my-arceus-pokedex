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
import { FlexRow } from '../../../commonStyled'
import { formatedName } from '../../../commonFunctions'
import {PokeService} from "../../../service/pokeService";
import {PokemonDetailContent} from "../../../pages/PokemonDetail/PokemonDetailStyled";

const PokemonEvolutionInfo = ({evolutionChainData, evolutionFromData}) => {
  const [loading, setLoading] = React.useState(true)
  const [evolutionChain, setEvolutionChain] = React.useState([])

  const evolvesFrom = evolutionFromData.name

  React.useEffect(()=>{
    const pokeService = PokeService.getInstance()
    pokeService.getEvolutionData(evolutionChainData)
      .then(data=> {
        setEvolutionChain(data)
      })
      .catch(error=>console.log(error))
      .finally(()=>{setLoading(false)})
  }, [evolutionChainData])

  console.log(evolutionChain)

  return (
    <PokemonDetailContent>
      <h3>Cadena de evolución</h3>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FlexRow>
          {checkSimpleEvolution(evolutionChain) &&
            checkFirstInChain(evolutionChain.name, evolutionChain) &&
            <FlexRow>
              <p>Evoluciona a {getFirstEvolution(evolutionChain)}</p>
              {checkFirstEvolutionDetails(evolutionChain) &&
                <p>al nivel {getFirstEvolutionLevel(evolutionChain)}</p>
              }
            </FlexRow>
          }
          {/*{checkSimpleEvolution(evolutionChain) &&
            checkSecondInChain(evolutionChain.name, evolutionChain) &&
            checkThirdInChain(evolutionChain) &&
            <FlexRow>
              <p>Evoluciona a {getSecondEvolution(evolutionChain)}</p>
              {evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0] && <p>al nivel {evolutionChain.evolves_to[0].evolves_to[0].evolution_details[0].min_level}</p>}
            </FlexRow>
          }*/}
          {/*{!checkSimpleEvolution(evolutionChain) && evolutionChain.species.name === evolutionChain.name &&
            <div>
              <p>Evoluciona a</p>
              {evolutionChain.evolves_to.map((evolution, i) =>
                <FlexRow key={i}>
                  <p>{formatedName(evolution.species.name)}</p>
                  <p>Forma: {evolution.evolution_details[0].trigger.name}</p>
                </FlexRow>
              )}
            </div>
          }*/}
        </FlexRow>
      }
    </PokemonDetailContent>
  )
}

export default PokemonEvolutionInfo