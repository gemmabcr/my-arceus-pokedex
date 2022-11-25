import styled from 'styled-components'
import { breakpointTablet, breakpointMobile, borderType } from '../../../commonStyled'

export const LocationsContainer = styled.div `
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3,1fr);
  margin-bottom: 1rem;
  margin-top: 1rem;
  width: 100%;

  @media (max-width: ${breakpointTablet}) {
    grid-template-columns: repeat(2,1fr);
  }

  @media (max-width: ${breakpointMobile}) {
    grid-template-columns: repeat(1,1fr);
  }
`;

export const LocationsGridItem = styled.div `
  align-items: center;
  border: ${borderType};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
`