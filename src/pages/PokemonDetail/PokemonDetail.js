import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { PokemonDetailContainer, PokemonDetailInfoContent } from './PokemonDetailStyled'
import PokemonEvolutionInfo from '../../components/PokemonInfo/PokemonEvolutionInfo/PokemonEvolutionInfo'
import PokemonInfo from '../../components/PokemonInfo/PokemonInfo'
import PokemonLocationInfo from '../../components/PokemonInfo/PokemonLocationInfo/PokemonLocationInfo'
import PokemonSpecialConditionInfo from '../../components/PokemonInfo/PokemonSpecialConditionInfo/PokemonSpecialConditionInfo'
import PokemonTodosInfo from '../../components/PokemonInfo/PokemonTodosInfo/PokemonTodosInfo'
import { PokeService } from '../../service/pokeService'
import Loading from '../../components/Loading/Loading'

const PokemonDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const { urlPokemon } = location.state

  const [loading, setLoading] = React.useState(true)
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [hisuiDataPokemon, setHisuiDataPokemon] = React.useState([])
  const [locationsData, setLocationsData] = React.useState([])

  const [evolutionChainData, setEvolutionChainData] = React.useState([])
  const [evolutionFromData, setEvolutionFromData] = React.useState([])
  const [specialConditionsData, setSpecialConditionsData] = React.useState([])

  const [formData, setFormData] = React.useState([])
  const [editMode, setEditMode] = React.useState(false)

  function onChangeInput(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      const newFormData = []
      for (let i = 0 ; i < prevFormData.length; i++){
        const currentItem = prevFormData[i]
        if (currentItem.id === Number(name)) {
          const updatedItem = {
            ...currentItem,
            done: Number(value),
          }
          newFormData.push(updatedItem)
        }
        else {
          newFormData.push(currentItem)
        }
      }
      return newFormData
    })
  }


  React.useEffect(()=>{
    const pokeService = new PokeService()
    pokeService.getPokemonData(urlPokemon, Number(id))
      .then(data=> {
        setEvolutionChainData(data.evolutionChain)
        setEvolutionFromData(data.evolutionFrom)
        setUrlDataPokemon(data.hisuiPokemon)
        setHisuiDataPokemon(data.newHisuiPokemon)
        setLocationsData(data.locations)
        setSpecialConditionsData(data.specialConditions)
        setFormData(data.toDos)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlPokemon, id])

  return (
    <PokemonDetailContainer>
      {loading && <Loading />}
      {!loading &&
        <PokemonDetailInfoContent>
          <PokemonInfo
            urlDataPokemon={urlDataPokemon}
            index={id}
          />
          <PokemonLocationInfo locations={locationsData} />
          {/* TODO: finish these sections
          <PokemonSpecialConditionInfo conditions={specialConditionsData} />
          {evolutionChainData &&
            <PokemonEvolutionInfo
              namePokemon={hisuiDataPokemon.name}
              evolutionChainData={evolutionChainData.url}
              evolutionFromData={evolutionFromData}
            />
          }
          */}
          <PokemonTodosInfo
            formData={formData}
            onChangeInput={onChangeInput}
            editMode={editMode}
            setEditMode={setEditMode}
          />
        </PokemonDetailInfoContent>
      }
    </PokemonDetailContainer>
  )
}

export default PokemonDetail