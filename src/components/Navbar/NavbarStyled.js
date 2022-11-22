import styled from 'styled-components'

export const Header = styled.div`
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  height: 180px;
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
  background-color: #dedede;
  display: flex;
  justify-content: center;
  width: 100%;
  -webkit-box-shadow: -8px 10px 30px -15px rgba(0,0,0,0.44);
  -moz-box-shadow: -8px 10px 30px -15px rgba(0,0,0,0.44);
  box-shadow: -8px 10px 30px -15px rgba(0,0,0,0.44);
`;

export const LinkMenu = styled.div `
  border: 0.5px solid rgba(255,255,255,0.39);
  padding: 0.5rem;
`;
