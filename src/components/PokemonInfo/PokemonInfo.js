import React from 'react'
import { PokemonCardImg } from '../PokemonCard/PokemonCardStyled'
import PokemonTypeInfo from '../PokemonTypeInfo/PokemonTypeInfo'
import { FlexColumn, FlexRow } from '../../commonStyled'
import { formatedName } from '../../commonFunctions'
import { PokeService } from '../../service/pokeService'

const PokemonInfo = ({urlDataPokemon, evolutionPokemonData, locations, specialConditions}) => {
  const [dataPokemon, setDataPokemon] = React.useState([])
  const [imagePokemon, setImagePokemon] = React.useState([])
  const [typeDataPokemon, setTypeDataPokemon] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    PokeService.getInstance().getPokemon(urlDataPokemon)
      .then(data=> {
        setDataPokemon(data.data)
        setImagePokemon(data.image)
        setTypeDataPokemon(data.types)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlDataPokemon])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FlexColumn>
          <FlexRow>
            <PokemonCardImg
              alt={dataPokemon.name}
              src={imagePokemon}
            />
            <h4>{formatedName(dataPokemon.name)}</h4>
          </FlexRow>
          <FlexRow>
            {typeDataPokemon.map(item=>
              <PokemonTypeInfo
                key={item.slot}
                urlTypePokemon={item.type.url}
              />
            )}
          </FlexRow>
        </FlexColumn>
      }
    </div>
  )
}

export default PokemonInfo