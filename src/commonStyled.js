import styled from 'styled-components'
import {backgroundImage} from './data'

export const FlexRow = styled.div `
  align-items: center;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
`
export const FlexColumn = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

export const FinalBannerImg = styled.img `
  max-width: 100%;
`

export const MainContainer = styled.div `
  background-image: url(${backgroundImage});
`

export const PrimaryButton = styled.button `
  background-color: #30a7d7;
  border-radius: 10px;
  border: none;
  clear: both;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: "Flexo-Demi",arial,sans-serif;
  font-size: 105%;
  font-weight: bold;
  height: auto;
  letter-spacing: 1px;
  line-height: 125%;
  margin: 1.5625%;
  padding: 0.75em 1.25em 0.675em;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  vertical-align: middle;

  &:hover {
    background-color: #218db9;
  }
`;
