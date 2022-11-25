import React, { Fragment } from 'react'
import { TodosTable, TodosTableHeader, TodosTableBody } from './PokemonTodosInfoStyled'
import { getLengthTodos, getTodoText, getGoalText } from './ToDosFunctions'
import { LinkPokedex } from '../../Navbar/NavbarStyled'
import { useLoggedContext } from '../../../application/PageLayout'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import PokemonTodosEditableTable from "./EditableTable/PokemonTodosEditableTable";

const PokemonTodosInfo = ({todos}) => {
  const [logged, setLogged] = useLoggedContext ()
  const uncompletedTodos = todos.filter(todo => todo.done < todo.goal)
  const [editMode, setEditMode] = React.useState(false)

  const [formData, setFormData] = React.useState(todos)

  function onChangeInput(event) {
    const {name, value} = event.target
    setFormData(prevFormData => {
      const newFormData = []
      for (let i = 0 ; i < prevFormData.length; i++){
        const currentItem = prevFormData[i]
        if (currentItem.id === Number(name)) {
          const updatedItem = {
            ...currentItem,
            done: Number(value),
          }
          newFormData.push(updatedItem)
        }
        else {
          newFormData.push(currentItem)
        }
      }
      return newFormData
    })
  }

  function saveEditedTodos(){
    setEditMode(false)
  }

  return (
    <PokemonDetailContent>
      <h3>Tareas de la Pokédex por hacer ({getLengthTodos(logged, uncompletedTodos, todos)})</h3>
      {logged &&
        <Fragment>
          {uncompletedTodos.length === 0 &&
            <p>Completada!!</p>
          }
          {uncompletedTodos.length > 0 &&
            <>
              {!editMode &&
                <>
                  <LinkPokedex onClick={()=>setEditMode(true)}>
                    Editar progreso de las tareas
                  </LinkPokedex>
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
                </>
              }
            </>
          }
          {editMode &&
            <div>
              <p>Editando el progreso de las tareas... </p>
              <PokemonTodosEditableTable
                formData={formData}
                onChangeInput={onChangeInput}
                todos={todos}
              />
              <LinkPokedex onClick={()=>saveEditedTodos()}>
                Guardar
              </LinkPokedex>
            </div>
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