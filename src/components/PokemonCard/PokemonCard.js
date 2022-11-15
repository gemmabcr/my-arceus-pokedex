import React from 'react'
import {PokemonCardContainer, PokemonCardImg} from './PokemonCardStyled'
import {FlexRow} from '../../commonStyled'

function capitalize(name){
  return name.charAt(0).toUpperCase() + name.slice(1);
}

const PokemonCard = ({urlPokemon, index}) => {
  const [dataPokemon, setDataPokemon] = React.useState([])
  const [imagePokemon, setImagePokemon] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    fetch(urlPokemon)
      .then((response)=>response.json())
      .then(data=> {
        setDataPokemon(data)
        setImagePokemon(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`)
      })
      .catch((error)=>console.log(error))
      .finally(()=> setLoading(false))
  },[urlPokemon])

  console.log(dataPokemon)

  return (
    <PokemonCardContainer>
      {loading && <p>Loading...</p>}
      {!loading &&
        <FlexRow>
          <p>{index}</p>
          <PokemonCardImg alt={dataPokemon.name} src={imagePokemon} />
          <p>{capitalize(dataPokemon.name)}</p>
        </FlexRow>
      }
      {/*<div>
        <p>{pokemon.type}</p>
        <p>Time: {pokemon.time}</p>
        <p>Location: {pokemon.location}</p>
        {pokemon.evolution &&
          <div>
            <p>Evolution</p>
            <p>Type: {pokemon.evolution.type}</p>
            {pokemon.evolution.level && <p>Level: {pokemon.evolution.level}</p>}
            {pokemon.evolution.object && <p>Object: {pokemon.evolution.object}</p>}
            {pokemon.evolution.feature && <p>Feature: {pokemon.evolution.feature}</p>}
          </div>
        }
      </div>*/}
    </PokemonCardContainer>
  )
}

export default PokemonCard