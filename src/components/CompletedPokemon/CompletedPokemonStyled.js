import styled from 'styled-components'

export const CompletedPokemonRow = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill,130px);
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`

export const CompletedPokemonCard = styled.div `
  align-items: center;
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