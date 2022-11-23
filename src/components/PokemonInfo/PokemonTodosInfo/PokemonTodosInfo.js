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
    return `${done} de ${goal}`
  }

  return (
    <PokemonDetailContent>
      <h3>Tareas de la Pokédex</h3>
      {logged &&
        <Fragment>
          {uncompletedTodos.length === 0 &&
            <p>Completada!!</p>
          }
          {uncompletedTodos.length > 0 &&
            <table>
              <tbody>
                <tr>
                  <th>Progreso</th>
                  <th>Descripción</th>
                </tr>
                {uncompletedTodos.map((todo,index) =>
                  <tr key={index}>
                    <th>{getGoalText(todo.goal, todo.done)}</th>
                    <th>{getTodoText(todo.id)}</th>
                  </tr>
                )}
              </tbody>
            </table>
          }
        </Fragment>
      }
      {!logged &&
        <table>
          <tbody>
          <tr>
            <th>Meta</th>
            <th>Descripción</th>
          </tr>
          {todos.map((todo,index) =>
            <tr key={index}>
              <th>{todo.goal}</th>
              <th>{getTodoText(todo.id)}</th>
            </tr>
          )}
          </tbody>
        </table>
      }
    </PokemonDetailContent>
  )
}

export default PokemonTodosInfo