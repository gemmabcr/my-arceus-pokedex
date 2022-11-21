import React from 'react'

const PokemonTodosInfo = ({todos}) => {
  return (
    <div>
      {todos.map(todo => <p key={todo.id}>{todo.id} -> Goal: {todo.goal}</p>)}
    </div>
  )
}

export default PokemonTodosInfo