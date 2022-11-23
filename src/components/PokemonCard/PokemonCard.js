import React from 'react'
import { PokemonCardContainer, PokemonCardContent } from './PokemonCardStyled'
import { FlexColumn, FlexRow } from '../../commonStyled'
import PokemonInfo from '../PokemonInfo/PokemonInfo'
import { PokeService } from '../../service/pokeService'
import PokemonTodosInfo from '../PokemonInfo/PokemonTodosInfo/PokemonTodosInfo'
import Loading from '../Loading/Loading'

const PokemonCard = ({urlPokemon, index, todos}) => {
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = new PokeService()
      pokeService.getPokemonData(urlPokemon, index)
      .then(data=> {
        setUrlDataPokemon(data.hisuiPokemon)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlPokemon, index])

  return (
    <PokemonCardContainer>
      {loading && <Loading />}
      {!loading &&
        <PokemonCardContent>
          <FlexRow>
            <p>{index}</p>
            <PokemonInfo
              urlDataPokemon={urlDataPokemon}
            />
          </FlexRow>
          <FlexColumn>
            <h4>Tareas de la pokedex</h4>
            <PokemonTodosInfo todos={todos} />
          </FlexColumn>
        </PokemonCardContent>
      }
    </PokemonCardContainer>
  )
}

export default PokemonCard