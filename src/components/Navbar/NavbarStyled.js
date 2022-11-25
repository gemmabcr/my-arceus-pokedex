import styled from 'styled-components'
import { maxWidthScreen } from '../../commonStyled'

export const NavbarContainer = styled.div `
  background-color: white;
  -webkit-box-shadow: -8px 10px 30px -15px rgba(0,0,0,0.44);
  -moz-box-shadow: -8px 10px 30px -15px rgba(0,0,0,0.44);
  box-shadow: -8px 10px 30px -15px rgba(0,0,0,0.44);
`

export const Header = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  height: 180px;
  max-width: ${maxWidthScreen};
  padding: 1.5rem;
  position: relative;
  width: 100%;
`;

export const LogoContainer = styled.div `
  display: flex;
  justify-content: center;
`

export const LogoArceus = styled.img `
  max-width: 180px;
  object-fit: contain;
`

export const LoginContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
`;

export const LinksMenu = styled.div `
  align-items: baseline;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin: 0 auto;
  max-width: ${maxWidthScreen};
  padding: 0 1.5rem 1rem 1.5rem;
`;

export const LoggedContainer = styled.div `
  align-items: end;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const LoggedUser = styled.div `
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`

export const LoggedUserText = styled.p `
  color: #1684b0;
  font-weight: 600;
  margin-bottom: 0;
  text-transform: uppercase;
`

export const LogoutPokedex = styled.button `
  background: transparent;
  border: 0;
  color: #2d9fcc;
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 0;
  margin-right: 0.5rem;

  &:hover {
    color: #0b7098;
  }
`

export const LinkPokedex = styled.button `
  background: #c8e6f1;
  border: 1px solid #1684b0;
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
    background: #aacfdc;
    color: #005475;
  }
`

export const LinkMenuTitle = styled.p `
  color: #005475;
  margin-bottom: 0;
  margin-right: 0.5rem;
  text-transform: uppercase;
`

export const LinkMenu = styled.div `
  background-color: #eaeaea;
  border: 0.5px solid rgba(255, 255, 255, 0.39);
  border-radius: 0.25rem;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    background-color: #cecece;
    color: #30a7d7;
  }
`;
