import React from 'react'
import {formatedName} from '../../../commonFunctions'

export function getFirstPlaceName(data) {
  return formatedName(data.species.name)
}

export function checkFirstPlaceInChain(evolvesFrom){
  return evolvesFrom === undefined || evolvesFrom === null
}

export function evolvesFromName(evolvesFrom) {
  return formatedName(evolvesFrom.name)
}

export function checkSecondPlaceInChain(data){
  return data.evolves_to.length > 0
}

export function getFirstEvolution(data){
  const firstEvolution = data.evolves_to
  const nameTemplates = firstEvolution.map(evolution => evolution.species.name)
  return nameTemplates.map(item => <span key={item}>{formatedName(item)}</span>)
}

export function checkThirdPlaceinChain(data) {
  if (checkSecondPlaceInChain(data)) {
    return data.evolves_to[0].evolves_to.length > 0
  }
  return false
}

export function getSecondEvolution(data){
  const secondEvolution = data.evolves_to[0].evolves_to
  const nameTemplates = secondEvolution.map(evolution => evolution.species.name)
  return nameTemplates.map(item => <span key={item}>{formatedName(item)}</span>)
}