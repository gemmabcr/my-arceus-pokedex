import React from 'react'
import { PokemonCardContainer, PokemonCardContent } from './PokemonCardStyled'
import {FlexColumn, FlexRow} from '../../commonStyled'
import PokemonInfo from '../PokemonInfo/PokemonInfo'
import { PokeService } from '../../service/pokeService'
import PokemonTodosInfo from '../PokemonTodosInfo/PokemonTodosInfo'

const PokemonCard = ({urlPokemon, index}) => {
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [addedPokemonData, setAddedPokemonData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = new PokeService()
      pokeService.getPokemonData(urlPokemon, index)
      .then(data=> {
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
        <PokemonCardContent>
          <FlexRow>
            <p>{index}</p>
            <PokemonInfo
              urlDataPokemon={urlDataPokemon}
              locations={addedPokemonData.location}
              specialConditions={addedPokemonData.specialCondition}
            />
          </FlexRow>
          <FlexColumn>
            <h4>Tareas de la pokedex</h4>
            <PokemonTodosInfo todos={addedPokemonData.toDos} />
          </FlexColumn>
        </PokemonCardContent>
      }
    </PokemonCardContainer>
  )
}

export default PokemonCard