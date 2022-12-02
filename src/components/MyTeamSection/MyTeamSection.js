import React from 'react'
import { MyListSection } from '../../pages/MyList/MyListStyled'
import PokemonLine from './PokemonLine/PokemonLine'
import EmptyTeam from './EmptyTeam/EmptyTeam'
import AddToTeam from './AddToTeam/AddToTeam'
import RemoveFromTeam from './RemoveFromTeam/RemoveFromTeam'

const MyTeamSection = ({hisuiPokedex, setHisuiPokedex}) => {
  const [myTeam, setMyTeam] = React.useState(()=>{
    if (localStorage.getItem('myTeam') === null) {
      return []
    }
    return JSON.parse(localStorage.getItem('myTeam'))
  })
  const [addFormData, setAddFormData] = React.useState([])
  const [removeFormData, setRemoveFormData] = React.useState([])

  function selectValue(event){
    const indexPokemon = Number(event.target.value)
    if (event.target.name === 'addToTeam') {
      setAddFormData(indexPokemon)
    }
    if (event.target.name === 'removeFromTeam') {
      setRemoveFormData(indexPokemon)
    }
  }

  function addToMyTeam(){
    setMyTeam(prevFormData => {
      const newFormData = [...prevFormData, addFormData]
      localStorage.setItem('myTeam', JSON.stringify(newFormData))
      return newFormData
    })
  }

  function removeFromMyTeam(){
    const indexPokemon = myTeam.indexOf(removeFormData)
    if (indexPokemon > -1) {
      setMyTeam(prevFormData => {
        const newFormData = [...prevFormData]
        newFormData.splice(indexPokemon, 1)
        localStorage.setItem('myTeam', JSON.stringify(newFormData))
        return newFormData
      })
    }
  }

  function resetMyTeam(){
    setMyTeam(prevFormData => {
      const resetFormData = []
      localStorage.setItem('myTeam', JSON.stringify(resetFormData))
      return resetFormData
    })
  }

  return (
    <MyListSection>
      <h4>Mi equipo ({myTeam.length}/6)</h4>
      {myTeam.length === 0 &&
        <EmptyTeam />
      }
      {myTeam.length < 6 &&
        <AddToTeam
          hisuiPokedex={hisuiPokedex}
          myTeam={myTeam}
          selectValue={selectValue}
          addToMyTeam={addToMyTeam}
        />
      }
      {myTeam.length > 0 &&
        <RemoveFromTeam
          hisuiPokedex={hisuiPokedex}
          myTeam={myTeam}
          selectValue={selectValue}
          removeFromMyTeam={removeFromMyTeam}
          resetMyTeam={resetMyTeam}
        />
      }
      <PokemonLine
        hisuiPokedex={hisuiPokedex}
        setHisuiPokedex={setHisuiPokedex}
        myTeam={myTeam}
      />
    </MyListSection>
  )
}

export default MyTeamSection