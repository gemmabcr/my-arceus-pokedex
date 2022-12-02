import React from 'react'
import { FlexColumn, FlexRow } from '../../commonStyled'
import { formatedName } from '../../commonFunctions'
import { MyListSection } from '../../pages/MyList/MyListStyled'
import PokemonLine from './PokemonLine/PokemonLine'

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

  const renderToAdd = hisuiPokedex.filter(pokemon => myTeam.indexOf(pokemon.index) === -1)
  const renderToDelete = myTeam.map(item => hisuiPokedex.find(pokemon => pokemon.index === item ))

  return (
    <MyListSection>
      <h4>Mi equipo</h4>
      {myTeam.length < 6 &&
        <FlexColumn>
          {myTeam.length === 0 &&
            <p>🧐  You haven't set your team</p>
          }
          <FlexRow>
            <label htmlFor="addToTeam">Añadir a mi equipo:</label>
            <select
              onChange={selectValue}
              name="addToTeam"
              id="addToTeam"
            >
              <option>- Select -</option>
              {renderToAdd.map(pokemon =>
                <option
                  key={pokemon.index}
                  value={pokemon.index}
                >
                  #{pokemon.index} - {formatedName(pokemon.name)}
                </option>
              )}
            </select>
            <button onClick={addToMyTeam}>Añadir</button>
          </FlexRow>
          {myTeam.length > 0 &&
            <FlexColumn>
              <FlexRow>
                <label htmlFor="removeFromTeam">Eliminar de mi equipo:</label>
                <select
                  onChange={selectValue}
                  name="removeFromTeam"
                  id="removeFromTeam"
                >
                  <option>- Select -</option>
                  {renderToDelete.map(pokemon =>
                    <option
                      key={pokemon.index}
                      value={pokemon.index}
                    >
                      #{pokemon.index} - {formatedName(pokemon.name)}
                    </option>
                  )}
                </select>
                <button onClick={removeFromMyTeam}>Eliminar</button>
              </FlexRow>
              <button onClick={resetMyTeam}>
                Eliminar todo el equipo
              </button>
            </FlexColumn>
          }
        </FlexColumn>
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