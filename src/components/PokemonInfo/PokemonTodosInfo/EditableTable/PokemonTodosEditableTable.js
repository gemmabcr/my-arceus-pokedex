import React from 'react'
import {
  TodosTable,
  TodosTableBody,
  TodosTableHeader,
  InputEditableTable,
  EditableTodoMobile, EditableTodoPC, EditableTodoMobileButton, EditableTodoMobileText
} from '../PokemonTodosInfoStyled'
import {getGoalText, getTodoText} from '../ToDosFunctions'

const PokemonTodosEditableTable = ({todos, onChangeInput, onChangeButton}) => {
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
            <EditableTodoMobile>
              <EditableTodoMobileButton
                onClick={()=>onChangeButton('-', todo.id)}
              >
                -
              </EditableTodoMobileButton>
              <EditableTodoMobileText>
                {todo.done}
              </EditableTodoMobileText>
              <EditableTodoMobileButton
                onClick={()=>onChangeButton('+', todo.id)}
              >
                +
              </EditableTodoMobileButton>
            </EditableTodoMobile>
            <EditableTodoPC>
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
            </EditableTodoPC>
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
