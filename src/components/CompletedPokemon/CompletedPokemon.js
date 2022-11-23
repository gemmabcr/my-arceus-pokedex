import React from 'react'
import CompletedPokemonInfo from './CompletedPokemonInfo/CompletedPokemonInfo'
import Loading from '../Loading/Loading'
import { PokeService } from '../../service/pokeService'

const CompletedPokemon = ({urlPokemon, index}) => {
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
      {loading && <Loading/>}
      {!loading &&
        <CompletedPokemonInfo
          index={index}
          urlDataPokemon={urlDataPokemon}
        />
      }
    </>
  )
}

export default CompletedPokemon