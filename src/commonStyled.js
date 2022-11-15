import styled from 'styled-components'
import {backgroundImage} from './data'

export const FlexRow = styled.div `
  align-items: center;
  display: flex;
  gap: 0.5rem;
`

export const FinalBannerImg = styled.img `
  max-width: 100%;
`

export const MainContainer = styled.div `
  background-image: url(${backgroundImage});
`
