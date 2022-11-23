import React from 'react'
import { PokeService } from '../../../service/pokeService'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'

const PokemonTodosInfo = ({todos}) => {

  function getTodoText(id){
    const data = (PokeService.getInstance().getTodoPokedexText(id))
    return data.name
  }

  if (todos !== undefined) {
    return (
      <PokemonDetailContent>
        <h3>Tareas de la Pokédex</h3>
        {todos.map((todo,index) => <p key={index}>{getTodoText(todo.id)} -> Goal: {todo.goal}</p>)}
      </PokemonDetailContent>
    )
  }
}

export default PokemonTodosInfo