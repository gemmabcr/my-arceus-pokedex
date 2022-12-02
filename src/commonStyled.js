import styled from 'styled-components'
import {backgroundImage} from './data'

export const maxWidthScreen = '900px'
export const breakpointTablet = '960px'
export const breakpointMobile = '600px'
export const boxShadow = 'rgba(0, 0, 0, 0.16) 0 1px 4px'
export const bottomBorderRadius = '0 0 1rem 1rem'

export const colors = {
  light: '#F2F0E3',
  darkerLight: '#D8D2AB',
  green: '#44C190',
  darkBlue: '#1A4A63',
  mediumBlue: '#0063A1',
  brightBlue: '#009CDD',
  highBlack: 'rgba(0,0, 0, 0.87)',
  mediumBlack: 'rgba(0,0, 0, 0.60)',
  lowBlack: 'rgba(0,0, 0, 0.38)',
}

export const borderType = `1px solid ${colors.darkerLight}`

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
  margin-top: 4rem;
  max-height: 800px;
  object-fit: cover;
  width: 100%;
`

export const MainContainer = styled.div `
  background-image: url(${backgroundImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  max-height: 100vh;
  overflow-y: scroll;
`

export const ContentContainer = styled.div `
  margin: 0 auto;
  max-width: ${maxWidthScreen};
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

export const LocationImage = styled.img `
  background-color: ${colors.mediumBlue};
  border-radius: 50%;
  height: 24px;
  width: 24px;
`

export const ScrollTopButton = styled.button `
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 1rem;
  background: #c8e6f1;
  border: 1px solid #1684b0;
  border-radius: 50%;
  color: #1684b0;
  cursor: pointer;
  font-weight: 600;
  justify-Content: center;
  padding: 0.5rem;
`