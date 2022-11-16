import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PokemonDetail = () => {
  const {id} = useParams()

  return (
    <div>
      <Link to={'/'}>
        <p>Atrás</p>
      </Link>
      <p>Pokemon Detail Page {id}</p>
    </div>
  )
}

export default PokemonDetail