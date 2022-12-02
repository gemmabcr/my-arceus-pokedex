import React from 'react'
import { FlexRow } from '../../commonStyled'
import { formatedName } from '../../commonFunctions'
import { MyListSection } from '../../pages/MyList/MyListStyled'
import PokemonLine from './PokemonLine/PokemonLine'

const MyTeamSection = ({hisuiPokedex, setHisuiPokedex}) => {
  const [formData, setFormData] = React.useState([])
  const [myTeam, setMyTeam] = React.useState(()=>{
    if (localStorage.getItem('myTeam') === null) {
      return []
    }
    return JSON.parse(localStorage.getItem('myTeam'))
  })

  function setMyTeamButton(){
    setMyTeam(prevFormData => {
      const newFormData = [...prevFormData, formData]
      localStorage.setItem('myTeam', JSON.stringify(newFormData))
      return newFormData
    })
  }

  function selectValue(event){
    const indexPokemon = Number(event.target.value)
    setFormData(indexPokemon)
  }

  return (
    <MyListSection>
      <h4>Mi equipo</h4>
      {myTeam.length < 6 &&
      <FlexRow>
        {myTeam.length === 0 &&
          <p>🧐  You haven't set your team</p>
        }
        <label htmlFor="selectTeam">Añadir a mi equipo:</label>
        <select
          onChange={selectValue}
          name="selectTeam"
          id="selectTeam"
        >
          {hisuiPokedex.map(pokemon =>
            <option
              key={pokemon.index}
              value={pokemon.index}
            >
              #{pokemon.index} - {formatedName(pokemon.name)}
            </option>
          )}
        </select>
        <button onClick={setMyTeamButton}>Añadir</button>
      </FlexRow>
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