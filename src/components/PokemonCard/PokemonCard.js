import React from 'react'
import { PokemonCardContent } from './PokemonCardStyled'
import { PokeService } from '../../service/pokeService'
import PokemonTodosInfo from '../PokemonInfo/PokemonTodosInfo/PokemonTodosInfo'
import Loading from '../Loading/Loading'
import PokemonListInfo from '../PokemonInfo/PokemonListInfo/PokemonListInfo'

const PokemonCard = ({urlPokemon, index, todos, setHisuiPokedex, hisuiPokedex}) => {
  const [urlDataPokemon, setUrlDataPokemon] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [hisuiDataPokemon, setHisuiDataPokemon] = React.useState([])
  const [formData, setFormData] = React.useState(todos)
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

  function onChangeButton(symbol, name){
    let number = 0;
    if (symbol === '+'){
      number = 1
    }
    if (symbol === '-'){
      number = -1
    }
    setFormData(prevFormData => {
      const newFormData = []
      for (let i = 0 ; i < prevFormData.length; i++){
        const currentItem = prevFormData[i]
        if (currentItem.id === Number(name)) {
          const updatedItem = {
            ...currentItem,
            done: currentItem.done + number,
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
            todos={formData}
          />
          <PokemonTodosInfo
            formData={formData}
            onChangeInput={onChangeInput}
            onChangeButton={onChangeButton}
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