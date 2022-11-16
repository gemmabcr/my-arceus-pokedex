import { capitalize } from '../../commonFunctions'

export function checkSimpleEvolution(data) {
  return data.evolves_to.length === 1 && data.evolves_to[0] && data.evolves_to[0].species
}

export function checkFirstInChain(pokemon, data) {
  return (data.species.name === pokemon)
}

export function checkSecondInChain(pokemon, data) {
  return (data.evolves_to[0].species.name === pokemon)
}

export function checkThirdInChain(data) {
  return data.evolves_to[0].evolves_to.length > 0
}

export function checkFirstEvolutionDetails(data) {
  return data.evolves_to[0].evolution_details[0]
}

export function getFirstEvolutionLevel(data) {
  return data.evolves_to[0].evolution_details[0].min_level
}

export function getFirstEvolution(data) {
  return capitalize(data.evolves_to[0].species.name)
}

export function getSecondEvolution(data) {
  return capitalize(data.evolves_to[0].evolves_to[0].species.name)
}