import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom'
import { PokemonDetailContainer, BackButtonContainer } from './PokemonDetailStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const PokemonDetail = () => {
  const {id} = useParams()
  const location = useLocation()
  const { urlPokemon, index } = location.state

  return (
    <PokemonDetailContainer>
      <BackButtonContainer>
        <Link to={'/'}>
          <p>Atrás</p>
        </Link>
      </BackButtonContainer>
      <PokemonCard urlPokemon={urlPokemon} index={index}  />
    </PokemonDetailContainer>
  )
}

export default PokemonDetail