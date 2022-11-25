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

export function updatePokedex(prevhisuiPokedex, index, formData){
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
}