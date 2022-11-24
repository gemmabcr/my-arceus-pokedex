import styled from 'styled-components'
import { colors, boxShadow, bottomBorderRadius, borderType } from '../../commonStyled'

export const PokemonDetailContainer = styled.div `
  align-items: center;
  color: ${colors.mediumBlack};
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
`

export const PokemonDetailInfoContent = styled.div `
  background-color: ${colors.light};
  border-radius: ${bottomBorderRadius};
  box-shadow: ${boxShadow};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`

export const PokemonDetailContent = styled.div `
  align-items: center;
  border-top: ${borderType};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`