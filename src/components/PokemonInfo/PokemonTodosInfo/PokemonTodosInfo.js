import React from 'react'

const PokemonTodosInfo = ({todos}) => {
  if (todos !== undefined) {
    return (
      <div>
        {todos.map((todo,index) => <p key={index}>{todo.id!== undefined && todo.id.name !== undefined && todo.id.name} -> Goal: {todo.goal}</p>)}
      </div>
    )
  }
}

export default PokemonTodosInfo