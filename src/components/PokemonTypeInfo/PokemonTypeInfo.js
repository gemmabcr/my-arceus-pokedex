import React from 'react'
import { PokeService } from '../../service/pokeService'
import { TypeLabel } from './PokemonTypeInfoStyled'

const PokemonTypeInfo = ({urlTypePokemon}) => {
  const [loading, setLoading] = React.useState(true)
  const [typePokemon, setTypePokemon] = React.useState('')
  const [typeImagePokemon, setTypeImagePokemon] = React.useState('')

  React.useEffect(()=>{
    PokeService.getInstance().getTypePokemon(urlTypePokemon)
      .then(data => {
        setTypePokemon(data.name)
        setTypeImagePokemon(data.image)
      })
      .catch(error => console.log(error))
      .finally(()=>setLoading(false))
  }, [urlTypePokemon])

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&
        <TypeLabel>
          <img width={16} height={16} src={typeImagePokemon} alt={typePokemon} />
          <span>{typePokemon}</span>
        </TypeLabel>
      }
    </div>
  )
}

export default PokemonTypeInfo