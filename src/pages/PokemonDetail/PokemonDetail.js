import React from 'react'
import { useParams } from "react-router-dom";

const PokemonDetail = () => {
  const {id} = useParams()

  return (
    <div>
      <p>Pokemon Detail Page {id}</p>
    </div>
  )
}

export default PokemonDetail