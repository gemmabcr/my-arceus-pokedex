import React, {Fragment} from 'react'
import { PokemonCardContainer } from './PokemonCardStyled'
import { FlexRow } from '../../commonStyled'
import PokemonInfo from '../PokemonInfo/PokemonInfo'
import { PokeService } from '../../service/pokeService'
import PokemonTodosInfo from '../PokemonTodosInfo/PokemonTodosInfo'

const PokemonCard = ({urlPokemon, index}) => {
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [evolutionPokemonData, setEvolutionPokemonData] = React.useState([])
  const [addedPokemonData, setAddedPokemonData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = new PokeService()
      pokeService.getPokemonData(urlPokemon, index)
      .then(data=> {
        setEvolutionPokemonData(data.evolution)
        setUrlDataPokemon(data.hisuiPokemon)
        setAddedPokemonData(data.addedData)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlPokemon, index])

  return (
    <PokemonCardContainer>
      {loading && <p>Loading...</p>}
      {!loading &&
        <Fragment>
          <FlexRow>
            <p>{index}</p>
            <PokemonInfo
              urlDataPokemon={urlDataPokemon}
              evolutionPokemonData={evolutionPokemonData}
              locations={addedPokemonData.location}
              specialConditions={addedPokemonData.specialCondition}
            />
          </FlexRow>
          <div>
            <p>
              Tareas de la pokedex
            </p>
            <PokemonTodosInfo todos={addedPokemonData.toDos} />
          </div>
        </Fragment>
      }
    </PokemonCardContainer>
  )
}

export default PokemonCard