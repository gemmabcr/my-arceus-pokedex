import styled from 'styled-components'

export const CompletedPokemonCard = styled.div `
  background-color: lightgoldenrodyellow;
  border: 1px solid lightgray;
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const CompletedPokemonCardImg = styled.img `
  background-color: rgba(255,255,255,0.75);
  border-radius: 50%;
  max-width: 80px;
  object-fit: contain;
`

export const CompletedPokemonCardText = styled.h5 `
  margin-bottom: 0;
`