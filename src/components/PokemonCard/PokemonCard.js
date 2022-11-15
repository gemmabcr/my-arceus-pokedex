import React from 'react'
import {PokemonCardContainer, PokemonCardImg} from './PokemonCardStyled'

const PokemonCard = ({pokemon}) => {
  const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.nationalPokedexNum}.png`

  return (
    <PokemonCardContainer>
      <p>{pokemon.hisuiPokedexNum}</p>
      <PokemonCardImg alt={pokemon.name} src={imagePokemon} />
      <div>
        <p>{pokemon.name}</p>
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
      </div>
    </PokemonCardContainer>
  )
}

export default PokemonCard