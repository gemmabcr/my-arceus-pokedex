import React, { Fragment } from 'react'
import { PokeService } from '../../../service/pokeService'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import { useLoggedContext } from '../../../application/PageLayout'
import { TodosTable, TodosTableHeader, TodosTableBody } from './PokemonTodosInfoStyled'

const PokemonTodosInfo = ({todos}) => {
  const [logged, setLogged] = useLoggedContext ()
  const uncompletedTodos = todos.filter(todo => todo.done < todo.goal)

  function getLenghtTodos(){
    if (logged) {
      return `${uncompletedTodos.length}/${todos.length}`
    }
    return todos.length
  }

  function getTodoText(id){
    const data = (PokeService.getInstance().getTodoPokedexText(id))
    return data.name
  }

  function getGoalText(goal, done){
    return `${done} de ${goal}`
  }

  return (
    <PokemonDetailContent>
      <h3>Tareas de la Pokédex por hacer ({getLenghtTodos()})</h3>
      {logged &&
        <Fragment>
          {uncompletedTodos.length === 0 &&
            <p>Completada!!</p>
          }
          {uncompletedTodos.length > 0 &&
            <TodosTable>
              <tbody>
                <tr>
                  <TodosTableHeader>
                    Progreso
                  </TodosTableHeader>
                  <TodosTableHeader>
                    Descripción
                  </TodosTableHeader>
                </tr>
                {uncompletedTodos.map((todo,index) =>
                  <tr key={index}>
                    <TodosTableBody>
                      {getGoalText(todo.goal, todo.done)}
                    </TodosTableBody>
                    <TodosTableBody>
                      {getTodoText(todo.id)}
                    </TodosTableBody>
                  </tr>
                )}
              </tbody>
            </TodosTable>
          }
        </Fragment>
      }
      {!logged &&
        <TodosTable>
          <tbody>
          <tr>
            <TodosTableHeader>
              Meta
            </TodosTableHeader>
            <TodosTableHeader>
              Descripción
            </TodosTableHeader>
          </tr>
          {todos.map((todo,index) =>
            <tr key={index}>
              <TodosTableBody>
                {todo.goal}
              </TodosTableBody>
              <TodosTableBody>
                {getTodoText(todo.id)}
              </TodosTableBody>
            </tr>
          )}
          </tbody>
        </TodosTable>
      }
    </PokemonDetailContent>
  )
}

export default PokemonTodosInfo