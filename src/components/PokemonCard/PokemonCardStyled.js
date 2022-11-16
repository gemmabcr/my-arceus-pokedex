import styled from 'styled-components'

export const PokemonCardContainer = styled.div `
  align-items: flex-start;
  background: lightyellow;
  border: 1px solid dimgrey;
  display: flex;
  gap: 0.5rem;
  margin: 0.5rem;
  padding: 1rem;
  width: 100%
`

export const PokemonCardImg = styled.img `
  max-width: 80px;
  object-fit: contain;
`