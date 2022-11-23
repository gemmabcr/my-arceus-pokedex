import React, {Fragment} from 'react'
import {
  checkFirstPlaceInChain,
  checkSecondPlaceInChain, checkThirdPlaceinChain,
  evolvesFromName,
  getFirstEvolution, getFirstPlaceName, getSecondEvolution,
} from './EvolutionFunctions'
import { FlexColumn, FlexRow } from '../../../commonStyled'
import { PokeService } from '../../../service/pokeService'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'

const PokemonEvolutionInfo = ({evolutionChainData, evolutionFromData, namePokemon}) => {
  const [loading, setLoading] = React.useState(true)
  const [evolutionChain, setEvolutionChain] = React.useState([])

  const evolvesFrom = evolutionFromData

  React.useEffect(()=>{
    const pokeService = PokeService.getInstance()
    pokeService.getEvolutionData(evolutionChainData)
      .then(data=> {
        setEvolutionChain(data)
      })
      .catch(error=>console.log(error))
      .finally(()=>{setLoading(false)})
  }, [evolutionChainData])

  return (
    <PokemonDetailContent>
      <h3>Evolución</h3>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FlexColumn>
          {!checkFirstPlaceInChain(evolvesFrom) && <p>Evoluciona de {evolvesFromName(evolvesFrom)}</p>}
          <p>1 - {getFirstPlaceName(evolutionChain)}</p>

          {checkSecondPlaceInChain(evolutionChain) &&
            <Fragment>
              <FlexRow>2 - {getFirstEvolution(evolutionChain)}</FlexRow>
            </Fragment>
          }
          {checkThirdPlaceinChain(evolutionChain) &&
            <Fragment>
              <FlexRow>3 - {getSecondEvolution(evolutionChain)}</FlexRow>
            </Fragment>
          }
        </FlexColumn>
      }
    </PokemonDetailContent>
  )
}

export default PokemonEvolutionInfo