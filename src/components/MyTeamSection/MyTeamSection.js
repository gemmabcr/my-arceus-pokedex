import React from 'react'
import { FlexColumn } from '../../commonStyled'
import { formatedName } from '../../commonFunctions'
import { MyListSection } from '../../pages/MyList/MyListStyled'
import PokemonLine from './PokemonLine/PokemonLine'

const MyTeamSection = ({hisuiPokedex, setHisuiPokedex}) => {
  const [myTeam, setMyTeam] = React.useState([65,49,60,45,77,129])

  function selectValue(event){
    setMyTeam(prevFormData => {
      const newFormData = prevFormData
      newFormData.push({
        id: prevFormData.length,
        value: Number(event.target.value),
      })
      return newFormData
    })
  }

  return (
    <MyListSection>
      <h4>Mi equipo</h4>
      {myTeam.length < 6 &&
      <FlexColumn>
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