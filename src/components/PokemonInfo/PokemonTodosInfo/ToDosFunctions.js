import { PokeService } from '../../../service/pokeService'

export function getLengthTodos(logged, uncompletedTodos, todos){
  if (logged) {
    return `${uncompletedTodos.length}/${todos.length}`
  }
  return todos.length
}

export function getTodoText(id){
  const data = (PokeService.getInstance().getTodoPokedexText(id))
  return data.name
}

export function getGoalText(goal, done, edit = false){
  if (edit) {
    return `de ${goal}`
  }
  return `${done} de ${goal}`
}
