import React from 'react'

const PokemonTodosInfo = ({todos}) => {
  return (
    <div>
      {todos.map((todo,index) => <p key={index}>{todo.id.name} -> Goal: {todo.goal}</p>)}
    </div>
  )
}

export default PokemonTodosInfo