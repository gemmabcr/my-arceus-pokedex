import React from "react";
import { FlexColumn, FlexRow } from '../../../commonStyled'
import { formatedName } from '../../../commonFunctions'

const RemoveFromTeam = ({hisuiPokedex, myTeam, selectValue, removeFromMyTeam, resetMyTeam}) => {
  const renderToDelete = myTeam.map(item => hisuiPokedex.find(pokemon => pokemon.index === item ))
  return (
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
  )
}

export default RemoveFromTeam