import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { PokemonDetailContainer, BackButtonContainer } from './PokemonDetailStyled'
import { FlexColumn } from '../../commonStyled'
import PokemonEvolutionInfo from '../../components/PokemonInfo/PokemonEvolutionInfo/PokemonEvolutionInfo'
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo'
import PokemonLocationInfo from '../../components/PokemonInfo/PokemonLocationInfo/PokemonLocationInfo'
import PokemonSpecialConditionInfo from '../../components/PokemonInfo/PokemonSpecialConditionInfo/PokemonSpecialConditionInfo'
import PokemonTodosInfo from '../../components/PokemonInfo/PokemonTodosInfo/PokemonTodosInfo'
import { PokeService } from '../../service/pokeService'

const PokemonDetail = () => {
  const {id} = useParams()
  const location = useLocation()
  const { urlPokemon, index } = location.state

  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [evolutionChainData, setEvolutionChainData] = React.useState([])
  const [evolutionFromData, setEvolutionFromData] = React.useState([])
  const [locationsData, setLocationsData] = React.useState([])
  const [specialConditionsData, setSpecialConditionsData] = React.useState([])
  const [todosData, setTodosData] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = new PokeService()
    pokeService.getPokemonData(urlPokemon, index)
      .then(data=> {
        setEvolutionChainData(data.evolutionChain)
        setEvolutionFromData(data.evolutionFrom)
        setUrlDataPokemon(data.hisuiPokemon)
        setLocationsData(data.locations)
        setSpecialConditionsData(data.specialConditions)
        setTodosData(data.toDos)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlPokemon, index])

  return (
    <PokemonDetailContainer>
      <BackButtonContainer>
        <Link to={'/'}>
          <p>Atrás</p>
        </Link>
      </BackButtonContainer>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FlexColumn>
          <PokemonInfo
            urlDataPokemon={urlDataPokemon}
            index={index}
          />
          <PokemonLocationInfo locations={locationsData} />
          <PokemonSpecialConditionInfo conditions={specialConditionsData} />
          {evolutionChainData &&
            <PokemonEvolutionInfo
              evolutionChainData={evolutionChainData.url}
              evolutionFromData={evolutionFromData}
            />
          }
          <PokemonTodosInfo todos={todosData} />
        </FlexColumn>
      }
    </PokemonDetailContainer>
  )
}

export default PokemonDetail