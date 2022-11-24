import React from 'react'
import { PokemonCardContent } from './PokemonCardStyled'
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
    <>
      {loading && <Loading />}
      {!loading &&
        <PokemonCardContent>
          <PokemonInfo
            index={index}
            urlDataPokemon={urlDataPokemon}
          />
          <PokemonTodosInfo todos={todos} />
        </PokemonCardContent>
      }
    </>
  )
}

export default PokemonCard