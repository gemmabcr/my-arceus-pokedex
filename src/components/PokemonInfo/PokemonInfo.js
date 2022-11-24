import React from 'react'
import { PokemonCardImg } from '../PokemonCard/PokemonCardStyled'
import PokemonTypeInfo from './PokemonTypeInfo/PokemonTypeInfo'
import { FlexRow } from '../../commonStyled'
import { formatedName } from '../../commonFunctions'
import { PokeService } from '../../service/pokeService'
import { PokemonDetailContent } from '../../pages/PokemonDetail/PokemonDetailStyled'
import Loading from '../Loading/Loading'
import { PokemonInfoContent } from './PokemonInfoStyled'

const PokemonInfo = ({urlDataPokemon, index}) => {
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
    <PokemonDetailContent>
      {loading && <Loading />}
      {!loading &&
        <PokemonInfoContent>
          <h3>#{index} {formatedName(dataPokemon.name)}</h3>
          <PokemonCardImg
            alt={dataPokemon.name}
            src={imagePokemon}
          />
          <FlexRow>
            {typeDataPokemon.map(item=>
              <PokemonTypeInfo
                key={item.slot}
                urlTypePokemon={item.type.url}
              />
            )}
          </FlexRow>
        </PokemonInfoContent>
      }
    </PokemonDetailContent>
  )
}

export default PokemonInfo