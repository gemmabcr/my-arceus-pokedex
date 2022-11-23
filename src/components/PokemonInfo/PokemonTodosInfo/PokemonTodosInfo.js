import React, { Fragment } from 'react'
import { PokeService } from '../../../service/pokeService'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import { useLoggedContext } from '../../../application/PageLayout'

const PokemonTodosInfo = ({todos}) => {
  const [logged, setLogged] = useLoggedContext ()
  const uncompletedTodos = todos.filter(todo => todo.done < todo.goal)

  function getTodoText(id){
    const data = (PokeService.getInstance().getTodoPokedexText(id))
    return data.name
  }

  function getGoalText(goal, done){
    if (done === goal) {
      return 'Completed'
    }
    return `${done} of ${goal}`
  }

  return (
    <PokemonDetailContent>
      <h3>Tareas de la Pokédex</h3>
      {logged &&
        <Fragment>
          {uncompletedTodos.length === 0 &&
            <p>Completada!!</p>
          }
          {uncompletedTodos.length > 0 && uncompletedTodos.map((todo,index) =>
            <span key={index}>{getTodoText(todo.id)} -> Goal: {getGoalText(todo.goal, todo.done)}</span>
          )}
        </Fragment>
      }
      {!logged &&
        <Fragment>
          {todos.map((todo,index) => <span key={index}>{getTodoText(todo.id)} -> Goal: {getGoalText(todo.goal, todo.done)}</span>)}
        </Fragment>
      }
    </PokemonDetailContent>
  )
}

export default PokemonTodosInfo