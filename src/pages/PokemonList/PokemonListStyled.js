import styled from 'styled-components'

export const PokemonListContainer = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
`

export const PokemonListContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`

export const VerMasButton = styled.button `
  background: transparent;
  border: 1px solid #3695bb;
  border-radius: 0.25rem;
  color: #1684b0;
  cursor: pointer;
  display: flex;
  font-weight: 600;
  justify-content: center;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem 0.5rem;
  width: 100%;

  &:hover {
    background: #e5f9ff;
    color: #3695bb;
  }
`
