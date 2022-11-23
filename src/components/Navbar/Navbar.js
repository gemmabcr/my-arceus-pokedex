import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import {
  NavbarContainer,
  Header,
  LogoArceus,
  LoginContainer,
  LinksMenu,
  LinkMenu,
  LogoContainer, LinkTitle,
} from './NavbarStyled'
import { useLoggedContext } from '../../application/PageLayout'
import { PrimaryButton } from '../../commonStyled'
import { loggedUsername } from '../../commonFunctions'
import { pokemonLogo, links, areaText } from '../../data'

export const generalTabs = [
  { link: '/', name: 'Todo Hisui' },
  { link: links.pradera, name: areaText.pradera },
  { link: links.pantanal, name: areaText.pantanal },
  { link: links.costa, name: areaText.costa },
  { link: links.ladera, name: areaText.ladera },
  { link: links.tundra, name: areaText.tundra },
  { link: links.distorsion, name: areaText.distorsion },
]

const Navbar = () => {
  const [logged, setLogged] = useLoggedContext ()
  const [loginModal, setLoginModal] = useState(false)

  function loginButton(){
    setLoginModal(!loginModal)
  }

  function logoutButton(){
    localStorage.setItem('logged', JSON.stringify(false))
    setLogged(false)
  }

  return (
    <NavbarContainer>
      <Header>
        <h1>Pokédex tracking list</h1>
        <LogoContainer>
          <LogoArceus src={pokemonLogo} alt='Pokemon Leyendas: Arceus' />
        </LogoContainer>
        <LoginContainer>
          {logged &&
            <LinkMenu>
              <Link to={links.myList}>
                Pokedex de {loggedUsername()}
              </Link>
            </LinkMenu>
          }
          <PrimaryButton onClick={()=> {
            if(!logged) {
              loginButton()
            }
            if (logged) {
              logoutButton()
            }
          }}>
            {logged? 'Log Out' : 'Log in'}
          </PrimaryButton>
        </LoginContainer>
      </Header>
      <hr />
      <LinksMenu>
        <LinkTitle>Areas:</LinkTitle>
        {generalTabs.map(tab =>
          <LinkMenu key={tab.name}>
            <Link to={tab.link}>
              {tab.name}
            </Link>
          </LinkMenu>
        )}
      </LinksMenu>
      <Modal
        show={loginModal}
        setShow={setLoginModal}
        setLogged={setLogged}
      />
    </NavbarContainer>
  )
}

export default Navbar