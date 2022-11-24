import styled from 'styled-components'
import { breakpointTablet, colors, boxShadow, bottomBorderRadius } from '../../commonStyled'

export const PokemonCardImg = styled.img `
  background-color: rgba(255,255,255,0.75);
  border-radius: 50%;
  margin-bottom: 1rem;
  max-width: 80px;
  object-fit: contain;
`

export const PokemonCardContent = styled.div `
  background-color: ${colors.light};
  border-radius: ${bottomBorderRadius};
  box-shadow: ${boxShadow};
  display: grid;
  grid-template-columns: 240px 1fr;

  @media (max-width: ${breakpointTablet}) {
    gap: 0;
    grid-template-columns: 1fr;
  }
`