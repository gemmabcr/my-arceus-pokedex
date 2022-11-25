import React, { Fragment } from 'react'
import { TodosTable, TodosTableHeader, TodosTableBody } from './PokemonTodosInfoStyled'
import { getLengthTodos, getTodoText } from './ToDosFunctions'
import { LinkPokedex } from '../../Navbar/NavbarStyled'
import { useLoggedContext } from '../../../application/PageLayout'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import PokemonTodosEditableTable from './EditableTable/PokemonTodosEditableTable'
import PokemonTodosReadonlyTable from './ReadonlyTable/PokemonTodosReadonlyTable'

const PokemonTodosInfo = ({ index, formData, onChangeInput, editMode, setEditMode, setHisuiPokedex, hisuiPokedex }) => {
  const [logged, setLogged] = useLoggedContext ()
  const uncompletedTodos = formData.filter(todo => todo.done < todo.goal)
  const completedTodos = formData.filter(todo => todo.done === todo.goal)

  function saveTodos() {
    setHisuiPokedex(prevhisuiPokedex => {
      const newHisuiPokedex = []
      for (let i = 0 ; i < prevhisuiPokedex.length; i++){
        const currentPokemon = prevhisuiPokedex[i]
        if (currentPokemon.index === index) {
          const updatedPokemon = {
            ...currentPokemon,
            toDos: formData,
          }
          newHisuiPokedex.push(updatedPokemon)
        }
        else {
          newHisuiPokedex.push(currentPokemon)
        }
      }
      localStorage.setItem('savedPokedex', JSON.stringify(newHisuiPokedex))
      return newHisuiPokedex
    })
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
                  <h3>Tareas de la Pokédex por hacer ({getLengthTodos(logged, uncompletedTodos, formData)})</h3>
                  <PokemonTodosReadonlyTable
                    todos={uncompletedTodos}
                  />

                  {completedTodos.length > 0 &&
                    <>
                      <h3>🎉 Tareas de la Pokédex completadas ({getLengthTodos(logged, completedTodos, formData)})</h3>
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
              />
              <LinkPokedex onClick={()=>saveTodos()}>
                Guardar
              </LinkPokedex>
            </div>
          }
        </Fragment>
      }
      {!logged &&
        <>
          <h3>Tareas de la Pokédex</h3>
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
            {formData.map((todo,index) =>
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
        </>
      }
    </PokemonDetailContent>
  )
}

export default PokemonTodosInfo