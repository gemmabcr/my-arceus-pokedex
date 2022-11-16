import React from 'react'
import { PokemonCardImg } from '../PokemonCard/PokemonCardStyled'
import PokemonTypeInfo from '../PokemonTypeInfo/PokemonTypeInfo'
import { FlexRow } from '../../commonStyled'
import PokemonEvolutionInfo from "../PokemonEvolutionInfo/PokemonEvolutionInfo";

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

const PokemonInfo = ({urlDataPokemon, evolutionPokemonData}) => {
  const [dataPokemon, setDataPokemon] = React.useState([])
  const [imagePokemon, setImagePokemon] = React.useState([])
  const [typeDataPokemon, setTypeDataPokemon] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    fetch(urlDataPokemon)
      .then((response)=>response.json())
      .then(data=> {
        setDataPokemon(data)
        setImagePokemon(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`)
        setTypeDataPokemon(data.types)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlDataPokemon])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FlexRow>
          <PokemonCardImg
            alt={dataPokemon.name}
            src={imagePokemon}
          />
          <div>
            <p>{capitalize(dataPokemon.name)}</p>
            <FlexRow>
              {typeDataPokemon.map(item=>
                <PokemonTypeInfo
                  key={item.slot}
                  urlTypePokemon={item.type.url}
                />
              )}
            </FlexRow>
            <PokemonEvolutionInfo urlEvolutionData={evolutionPokemonData.url} />
          </div>
        </FlexRow>
      }
    </div>
  )
}

export default PokemonInfo