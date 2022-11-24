import styled from 'styled-components'
import { borderType, colors } from '../../commonStyled'

export const CompletedPokemonRow = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill,130px);
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`

export const CompletedPokemonCard = styled.div `
  align-items: center;
  background-color: ${colors.darkerLight};
  border: ${borderType};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

export const CompletedPokemonCardImg = styled.img `
  background-color: ${colors.light};
  border-radius: 50%;
  max-width: 80px;
  object-fit: contain;
`

export const CompletedPokemonCardText = styled.h5 `
  margin-bottom: 0;
`