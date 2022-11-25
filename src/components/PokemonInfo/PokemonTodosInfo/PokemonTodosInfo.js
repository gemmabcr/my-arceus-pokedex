import React, { Fragment } from 'react'
import { TodosTable, TodosTableHeader, TodosTableBody } from './PokemonTodosInfoStyled'
import { getLengthTodos, getTodoText } from './ToDosFunctions'
import { LinkPokedex } from '../../Navbar/NavbarStyled'
import { useLoggedContext } from '../../../application/PageLayout'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import PokemonTodosEditableTable from "./EditableTable/PokemonTodosEditableTable";
import PokemonTodosReadonlyTable from "./ReadonlyTable/PokemonTodosReadonlyTable";

const PokemonTodosInfo = ({todos}) => {
  const [logged, setLogged] = useLoggedContext ()
  const [editMode, setEditMode] = React.useState(false)
  const [formData, setFormData] = React.useState(todos)
  const uncompletedTodos = formData.filter(todo => todo.done < todo.goal)
  const completedTodos = formData.filter(todo => todo.done === todo.goal)

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
                  <h3>Tareas de la Pokédex por hacer ({getLengthTodos(logged, uncompletedTodos, todos)})</h3>
                  <PokemonTodosReadonlyTable
                    todos={uncompletedTodos}
                  />

                  {completedTodos.length > 0 &&
                    <>
                      <h3>🎉 Tareas de la Pokédex completadas ({getLengthTodos(logged, completedTodos, todos)})</h3>
                      <PokemonTodosReadonlyTable
                        todos={completedTodos}
                      />
                    </>
                  }
                </>
              }
            </>
          }
          {editMode &&
            <div style={{width: '100%'}}>
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