import React, { Fragment } from 'react'
import {CompletedTable, TodosTable, TodosTableBody, TodosTableHeader} from './PokemonTodosInfoStyled'
import { getLengthTodos, getTodoText, updatePokedex } from './ToDosFunctions'
import { LinkPokedex } from '../../Navbar/NavbarStyled'
import { useLoggedContext } from '../../../App'
import { PokemonDetailContent } from '../../../pages/PokemonDetail/PokemonDetailStyled'
import PokemonTodosEditableTable from './EditableTable/PokemonTodosEditableTable'
import PokemonTodosReadonlyTable from './ReadonlyTable/PokemonTodosReadonlyTable'
import { FlexColumn, FlexRow } from '../../../commonStyled'

const PokemonTodosInfo = ({ index, formData, onChangeInput, onChangeButton, editMode, setEditMode, setHisuiPokedex, hisuiPokedex }) => {
  const logged = useLoggedContext()
  const uncompletedTodos = formData.filter(todo => todo.done < todo.goal)
  const everyTodosDone = formData.every(todo => todo.done >= todo.goal)

  function saveTodos () {
    setHisuiPokedex(prevhisuiPokedex => {
      return updatePokedex(prevhisuiPokedex, index, formData)
    })
    setEditMode(false)
  }

  return (
    <PokemonDetailContent>
      <FlexRow>
        <h3>{editMode && 'Editando las '}Tareas de la Pokédex</h3>
        {logged && !editMode &&
          <div>
            <LinkPokedex onClick={ () => setEditMode(true) }>
              Editar
            </LinkPokedex>
          </div>
        }
      </FlexRow>
      {logged &&
        <Fragment>
          {!editMode &&
            <>
              {everyTodosDone &&
                <CompletedTable>
                  🎉 Completada!!
                </CompletedTable>
              }
              {!everyTodosDone &&
                <>
                  <h5>En progreso ({getLengthTodos(logged, uncompletedTodos, formData)})</h5>
                  <PokemonTodosReadonlyTable
                    todos={formData}
                  />
                </>
              }
            </>
          }
          {editMode &&
            <div style={{ width: '100%' }}>
              {everyTodosDone &&
                <FlexColumn>
                  <PokemonTodosEditableTable
                    todos={formData}
                    onChangeInput={onChangeInput}
                    onChangeButton={onChangeButton}
                  />
                </FlexColumn>
              }
              <LinkPokedex onClick={ () => saveTodos() }>
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
          { formData.map((todo, index) =>
            <tr key={index}>
              <TodosTableBody>
                {todo.goal}
              </TodosTableBody>
              <TodosTableBody>
                {getTodoText(todo.id)}
              </TodosTableBody>
            </tr>
          ) }
          </tbody>
        </TodosTable>
      }
    </PokemonDetailContent>
  )
}

export default PokemonTodosInfo
