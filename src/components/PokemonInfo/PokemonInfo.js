import React from 'react'
import { PokemonCardImg } from '../PokemonCard/PokemonCardStyled'
import PokemonTypeInfo from '../PokemonTypeInfo/PokemonTypeInfo'
import { FlexRow } from '../../commonStyled'
import { capitalize } from '../../commonFunctions'
import PokemonEvolutionInfo from '../PokemonEvolutionInfo/PokemonEvolutionInfo'
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
            {evolutionPokemonData && evolutionPokemonData.url &&
              <PokemonEvolutionInfo namePokemon={dataPokemon.name} urlEvolutionData={evolutionPokemonData.url} />
            }
            {/*TODO: fix that
            {locations !== undefined && locations.map(location => <p key={location.id}>Location: {location.name}</p>)}
            {specialConditions.time.map(time => <p key={time}>Time: {time}</p>)}
            {specialConditions.weather.map(weather => <p key={weather}>Weather: {weather}</p>)}*/}
          </div>
        </FlexRow>
      }
    </div>
  )
}

export default PokemonInfo