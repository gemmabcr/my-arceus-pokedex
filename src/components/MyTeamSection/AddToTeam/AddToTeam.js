import React from 'react'
import { formatedName } from '../../../commonFunctions'
import { FlexRow } from '../../../commonStyled'

const AddToTeam = ({hisuiPokedex, myTeam, selectValue, addToMyTeam}) => {
  const renderToAdd = hisuiPokedex.filter(pokemon => myTeam.indexOf(pokemon.index) === -1)
  return (
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
  )
}

export default AddToTeam