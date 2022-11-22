import React from 'react'
import { PokeService } from '../../../service/pokeService'

const PokemonTodosInfo = ({todos}) => {

  function getTodoText(id){
    const data = (PokeService.getInstance().getTodoPokedexText(id))
    return data.name
  }

  if (todos !== undefined) {
    return (
      <div>
        {todos.map((todo,index) => <p key={index}>{getTodoText(todo.id)} -> Goal: {todo.goal}</p>)}
      </div>
    )
  }
}

export default PokemonTodosInfo