import React from 'react'
import { TodosTable, TodosTableBody, TodosTableHeader, InputEditableTable } from '../PokemonTodosInfoStyled'
import { getGoalText, getTodoText } from '../ToDosFunctions'

const PokemonTodosEditableTable = ({formData, onChangeInput}) => {
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
      {formData.map((todo,index) =>
        <tr key={index}>
          <TodosTableBody>
            <InputEditableTable
              id={todo.id}
              min={0}
              max={todo.goal}
              name={todo.id}
              onChange={onChangeInput}
              placeholder={todo.done}
              type='number'
              value={todo.done}
            />
            {getGoalText(todo.goal, todo.done, true)}
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

export default PokemonTodosEditableTable
