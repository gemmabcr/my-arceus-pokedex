import React from 'react'
import { PokemonCardContent } from './PokemonCardStyled'
import { PokeService } from '../../service/pokeService'
import PokemonTodosInfo from '../PokemonInfo/PokemonTodosInfo/PokemonTodosInfo'
import Loading from '../Loading/Loading'
import PokemonListInfo from '../PokemonInfo/PokemonListInfo/PokemonListInfo'

const PokemonCard = ({urlPokemon, index, setHisuiPokedex, hisuiPokedex}) => {
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [hisuiDataPokemon, setHisuiDataPokemon] = React.useState([])
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
      pokeService.getPokemonData(urlPokemon, index)
      .then(data=> {
        setUrlDataPokemon(data.hisuiPokemon)
        setHisuiDataPokemon(data.newHisuiPokemon)
        setFormData(data.toDos)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlPokemon, index])

  return (
    <>
      {loading && <Loading />}
      {!loading &&
        <PokemonCardContent>
          <PokemonListInfo
            index={index}
            urlDataPokemon={urlDataPokemon}
            url={urlPokemon}
          />
          <PokemonTodosInfo
            formData={formData}
            onChangeInput={onChangeInput}
            editMode={editMode}
            setEditMode={setEditMode}
            setHisuiPokedex={setHisuiPokedex}
            hisuiPokedex={hisuiPokedex}
            index={index}
          />
        </PokemonCardContent>
      }
    </>
  )
}

export default PokemonCard