import React from 'react'
import { CompletedPokemonCard, CompletedPokemonCardImg, CompletedPokemonCardText } from '../CompletedPokemonStyled'
import Loading from '../../Loading/Loading'
import { formatedName } from '../../../commonFunctions'
import { PokeService } from '../../../service/pokeService'

const CompletedPokemonInfo = ({urlDataPokemon, index}) => {
  const [dataPokemon, setDataPokemon] = React.useState([])
  const [imagePokemon, setImagePokemon] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    PokeService.getInstance().getPokemon(urlDataPokemon)
      .then(data=> {
        setDataPokemon(data.data)
        setImagePokemon(data.image)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlDataPokemon])

  return (
    <>
      {loading && <Loading />}
      {!loading &&
        <CompletedPokemonCard>
          <CompletedPokemonCardImg
            alt={dataPokemon.name}
            src={imagePokemon}
          />
          <CompletedPokemonCardText>
            #{index} {formatedName(dataPokemon.name)}
          </CompletedPokemonCardText>
        </CompletedPokemonCard>
      }
    </>
  )
}

export default CompletedPokemonInfo