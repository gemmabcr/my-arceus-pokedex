import React from 'react'
import { PokemonCardContainer } from './PokemonCardStyled'
import { FlexRow } from '../../commonStyled'
import PokemonInfo from '../PokemonInfo/PokemonInfo'

const PokemonCard = ({urlPokemon, index}) => {
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [evolutionPokemonData, setEvolutionPokemonData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    fetch(urlPokemon)
      .then((response)=>response.json())
      .then(data=> {
        setEvolutionPokemonData(data.evolution_chain)
        setUrlDataPokemon(checkHusuiPokemon(data.varieties))
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlPokemon])

  function checkHusuiPokemon(varieties){
    const foundHusui = varieties.filter(item => item.pokemon.name.includes('hisui'))
    if (foundHusui.length === 0) return varieties[0].pokemon.url
    else return foundHusui[0].pokemon.url
  }

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