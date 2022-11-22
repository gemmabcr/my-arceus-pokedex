import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { PokemonDetailContainer, BackButtonContainer, PokemonDetailContent } from './PokemonDetailStyled'
import { FlexRow } from '../../commonStyled'
import PokemonEvolutionInfo from '../../components/PokemonEvolutionInfo/PokemonEvolutionInfo'
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo'
import PokemonLocationInfo from '../../components/PokemonLocationInfo/PokemonLocationInfo'
import PokemonSpecialConditionInfo from '../../components/PokemonSpecialConditionInfo/PokemonSpecialConditionInfo'
import PokemonTodosInfo from '../../components/PokemonTodosInfo/PokemonTodosInfo'
import { PokeService } from '../../service/pokeService'

const PokemonDetail = () => {
  const {id} = useParams()
  const location = useLocation()
  const { urlPokemon, index } = location.state

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
    <PokemonDetailContainer>
      <BackButtonContainer>
        <Link to={'/'}>
          <p>Atrás</p>
        </Link>
      </BackButtonContainer>
      {loading && <p>Loading...</p>}
      {!loading &&
        <PokemonDetailContent>
          <FlexRow>
            <p>{index}</p>
            <PokemonInfo
              urlDataPokemon={urlDataPokemon}
              evolutionPokemonData={evolutionPokemonData}
            />
          </FlexRow>
          {evolutionPokemonData && evolutionPokemonData.url &&
            <PokemonEvolutionInfo namePokemon={evolutionPokemonData.name} urlEvolutionData={evolutionPokemonData.url} />
          }
          {addedPokemonData.location !== undefined && addedPokemonData.location.length > 0 &&
            <PokemonLocationInfo locations={addedPokemonData.location} />
          }
          {addedPokemonData.specialCondition !== undefined && addedPokemonData.specialCondition.length > 0 &&
            <PokemonSpecialConditionInfo conditions={addedPokemonData.specialCondition} />
          }
          <p>
            Tareas de la pokedex
          </p>
          <PokemonTodosInfo todos={addedPokemonData.toDos} />
        </PokemonDetailContent>
      }
    </PokemonDetailContainer>
  )
}

export default PokemonDetail