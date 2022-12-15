import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { PokemonDetailContainer, PokemonDetailInfoContent } from './PokemonDetailStyled'
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo'
import PokemonLocationInfo from '../../components/PokemonInfo/PokemonLocationInfo/PokemonLocationInfo'
import PokemonTodosInfo from '../../components/PokemonInfo/PokemonTodosInfo/PokemonTodosInfo'
import { PokeService } from '../../service/pokeService'
import Loading from '../../components/Loading/Loading'
import PokemonEvolutionInfo from '../../components/PokemonInfo/PokemonEvolutionInfo/PokemonEvolutionInfo'
import PokemonSpecialConditionInfo from '../../components/PokemonInfo/PokemonSpecialConditionsInfo/PokemonSpecialConditionInfo'

const PokemonDetail = ({ firstLoading, hisuiPokedex, setHisuiPokedex }) => {
  const { id } = useParams()
  const location = useLocation()
  const { urlPokemon, todos } = location.state

  const [loading, setLoading] = React.useState(true)
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [locationsData, setLocationsData] = React.useState([])
  const [specialConditionsData, setSpecialConditionsData] = React.useState([])
  const [evolutionChainData, setEvolutionChainData] = React.useState([])
  const [evolutionFromData, setEvolutionFromData] = React.useState([])
  const [formData, setFormData] = React.useState(todos)
  const [editMode, setEditMode] = React.useState(false)

  function onChangeInput (event) {
    const { name, value } = event.target
    setFormData(prevFormData => {
      const newFormData = []
      for (let i = 0; i < prevFormData.length; i++) {
        const currentItem = prevFormData[i]
        if (currentItem.id === Number(name)) {
          const updatedItem = {
            ...currentItem,
            done: Number(value)
          }
          newFormData.push(updatedItem)
        } else {
          newFormData.push(currentItem)
        }
      }
      return newFormData
    })
  }

  React.useEffect(() => {
    const pokeService = new PokeService()
    pokeService.getPokemonData(urlPokemon, Number(id))
      .then(data => {
        console.log(data)
        setUrlDataPokemon(data.hisuiPokemon)
        setLocationsData(data.locations)
        setSpecialConditionsData(data.specialConditions)
        setEvolutionChainData(data.evolutionChain)
        setEvolutionFromData(data.evolutionFrom)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [urlPokemon, id])

  if (firstLoading) {
    return (
      <Loading />
    )
  }

  return (
    <PokemonDetailContainer>
      <h3>Pokemon Detail</h3>
      {loading && <Loading/>}
      {!loading &&
        <PokemonDetailInfoContent>
          <PokemonInfo
            urlDataPokemon={urlDataPokemon}
            index={id}
          />
          <PokemonLocationInfo
            locations={locationsData}
          />
          <PokemonTodosInfo
            formData={formData}
            index={id}
            onChangeInput={onChangeInput}
            editMode={editMode}
            setEditMode={setEditMode}
            hisuiPokedex={hisuiPokedex}
            setHisuiPokedex={setHisuiPokedex}
          />
          <PokemonEvolutionInfo
            evolutionChainData={evolutionChainData}
            evolutionFromData={evolutionFromData}
            namePokemon={''}
          />
          <PokemonSpecialConditionInfo
            conditions={specialConditionsData}
          />
        </PokemonDetailInfoContent >
      }
    </PokemonDetailContainer>
  )
}

export default PokemonDetail
