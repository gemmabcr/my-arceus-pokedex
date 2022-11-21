export function formatedName(name) {
  if (name.includes('-')) {
    const compound = compoundName(name)
    return compound
  }
  return capitalize(name)
}

export function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function compoundName(name) {
  const splitedName = name.split('-')
  const capitalizeSplitedName = splitedName.map(item => capitalize(item))
  const joinedSplitedName = capitalizeSplitedName.join(' ')
  return joinedSplitedName
}