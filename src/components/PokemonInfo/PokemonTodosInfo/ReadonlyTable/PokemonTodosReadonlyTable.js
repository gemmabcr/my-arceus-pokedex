import React from 'react'
import { TodosTable, TodosTableBody, TodosTableHeader } from '../PokemonTodosInfoStyled'
import { getGoalText, getTodoText } from '../ToDosFunctions'

const PokemonTodosReadonlyTable = ({todos}) => {
  return(
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
      {todos.map((todo,index) =>
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
  )
}

export default PokemonTodosReadonlyTable