import React, { Fragment } from 'react'
import { TodosTable, TodosTableHeader, TodosTableBody } from './PokemonTodosInfoStyled'
import { getLengthTodos, getTodoText } from './ToDosFunctions'
import { LinkPokedex } from '../../Navbar/NavbarStyled'
import { useLoggedContext } from '../../../App'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import PokemonTodosEditableTable from './EditableTable/PokemonTodosEditableTable'
import PokemonTodosReadonlyTable from './ReadonlyTable/PokemonTodosReadonlyTable'
import { FlexColumn, FlexRow } from '../../../commonStyled'

const PokemonTodosInfo = ({ index, formData, onChangeInput, editMode, setEditMode, setHisuiPokedex, hisuiPokedex }) => {
  const [logged, setLogged] = useLoggedContext ()
  const uncompletedTodos = formData.filter(todo => todo.done < todo.goal)
  const completedTodos = formData.filter(todo => todo.done === todo.goal)

  function saveTodos() {
    setHisuiPokedex(prevhisuiPokedex => {
      const newHisuiPokedex = []
      for (let i = 0 ; i < prevhisuiPokedex.length; i++){
        const currentPokemon = prevhisuiPokedex[i]
        if (currentPokemon.index === Number(index)) {
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
      <FlexRow>
        <h3>{editMode && 'Editando las '}Tareas de la Pokédex</h3>
        {logged && !editMode &&
          <div>
            <LinkPokedex onClick={()=>setEditMode(true)}>
              Editar
            </LinkPokedex>
          </div>
        }
      </FlexRow>
      {logged &&
        <Fragment>
          {uncompletedTodos.length === 0 &&
            <p>Completada!!</p>
          }
          {uncompletedTodos.length > 0 &&
            <>
              {!editMode &&
                <>
                  <h5>En progreso ({getLengthTodos(logged, uncompletedTodos, formData)})</h5>
                  <PokemonTodosReadonlyTable
                    todos={uncompletedTodos}
                  />
                  {completedTodos.length > 0 &&
                    <>
                      <h5>🎉 Completadas ({getLengthTodos(logged, completedTodos, formData)})</h5>
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
              <>
                {uncompletedTodos.length > 0 &&
                  <FlexColumn>
                    <h5>En progreso ({getLengthTodos(logged, uncompletedTodos, formData)})</h5>
                    <PokemonTodosEditableTable
                      todos={uncompletedTodos}
                      onChangeInput={onChangeInput}
                    />
                  </FlexColumn>
                }
                {completedTodos.length > 0 &&
                  <FlexColumn>
                    <h5>🎉 Completadas ({getLengthTodos(logged, completedTodos, formData)})</h5>
                    <PokemonTodosEditableTable
                      todos={completedTodos}
                      onChangeInput={onChangeInput}
                    />
                  </FlexColumn>
                }
              </>
              <LinkPokedex onClick={()=>saveTodos()}>
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
      }
    </PokemonDetailContent>
  )
}

export default PokemonTodosInfo