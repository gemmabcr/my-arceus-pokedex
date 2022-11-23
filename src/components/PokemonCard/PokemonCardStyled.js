import styled from 'styled-components'

export const PokemonCardContainer = styled.div `
  align-items: flex-start;
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
`

export const PokemonCardImg = styled.img `
  background-color: rgba(255,255,255,0.75);
  border-radius: 50%;
  max-width: 80px;
  object-fit: contain;
`

export const PokemonCardContent = styled.div `
  display: grid;
  gap: 1rem;
  grid-template-columns: 240px 1fr;
  width: 100%;
`