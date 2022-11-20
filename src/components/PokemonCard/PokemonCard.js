import React from 'react'
import { PokemonCardContainer } from './PokemonCardStyled'
import { FlexRow } from '../../commonStyled'
import PokemonInfo from '../PokemonInfo/PokemonInfo'
import {PokeService} from "../../service/pokeService";

const PokemonCard = ({urlPokemon, index}) => {
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [evolutionPokemonData, setEvolutionPokemonData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = new PokeService()
      pokeService.getPokemonEvolution(urlPokemon)
      .then(data=> {
        setEvolutionPokemonData(data.evolution)
        setUrlDataPokemon(data.hisuiPokemon)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlPokemon])

  return (
    <PokemonCardContainer>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FlexRow>
          <p>{index}</p>
          <PokemonInfo
            urlDataPokemon={urlDataPokemon}
            evolutionPokemonData={evolutionPokemonData}
          />
        </FlexRow>
      }
    </PokemonCardContainer>
  )
}

export default PokemonCard