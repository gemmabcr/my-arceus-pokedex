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
  LogoContainer,
  LinkPokedex,
  LoggedContainer,
  LogoutPokedex,
  LoggedUser,
  LoggedUserText,
  LinkMenuTitle, Dropdown, MyDropdown, MyDropdownLine, DropdownContainer
} from './NavbarStyled'
import { useLoggedContext } from '../../App'
import { PrimaryButton } from '../../commonStyled'
import { loggedUsername } from '../../commonFunctions'
import { pokemonLogo, links, areaText } from '../../data'
import { PokeService } from '../../service/pokeService'

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
  const [hisuiPokedex, setHisuiPokedex] = React.useState([])
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  React.useEffect(()=>{
    const pokeService = PokeService.getInstance()
    pokeService.getPokemons()
      .then(data => setHisuiPokedex(data))
      .catch((error)=>console.log(error))
  },[])

  function loginButton(){
    setLoginModal(!loginModal)
  }

  function logoutButton(){
    localStorage.setItem('logged', JSON.stringify(false))
    setLogged(false)
  }

  function toggleShowMobileMenu(){
    if (showMobileMenu) {
      setShowMobileMenu(false)
    }
    else {
      setShowMobileMenu(true)
    }
  }

  return (
    <NavbarContainer>
      <Header>
        <h2>Pokédex tracking list</h2>
        <LogoContainer>
          <LogoArceus src={pokemonLogo} alt='Pokemon Leyendas: Arceus' />
        </LogoContainer>
        <LoginContainer>
          {!logged &&
            <PrimaryButton onClick={()=> loginButton()}>
              Log in
            </PrimaryButton>
          }
          {logged &&
            <LoggedContainer>
              <LoggedUser>
                <LoggedUserText>
                  {loggedUsername()}
                </LoggedUserText>
                <LogoutPokedex
                  onClick={()=> logoutButton()}
                >
                  Log Out
                </LogoutPokedex>
              </LoggedUser>
              <Link to={links.myList}>
                <LinkPokedex>
                  Mi Pokédex
                </LinkPokedex>
              </Link>
            </LoggedContainer>
          }
        </LoginContainer>
      </Header>
      <hr />
      <LinksMenu>
        <LinkMenuTitle>Areas:</LinkMenuTitle>
        {generalTabs.map(tab =>
          <LinkMenu key={tab.name}>
            <Link to={tab.link}>
              {tab.name}
            </Link>
          </LinkMenu>
        )}
      </LinksMenu>
      <DropdownContainer>
        <LinkMenuTitle>Areas:</LinkMenuTitle>
        <Dropdown>
          <LinkPokedex
            onClick={()=>toggleShowMobileMenu()}
          >
            {showMobileMenu? 'Ocultar areas' : 'Mostrar Areas'}
          </LinkPokedex>
          {showMobileMenu &&
            <MyDropdown>
              {generalTabs.map(tab =>
                <Link to={tab.link} key={tab.name}>
                  <MyDropdownLine onClick={()=>setShowMobileMenu(false)}>
                    {tab.name}
                  </MyDropdownLine>
                </Link>
              )}
            </MyDropdown>
          }
        </Dropdown>
      </DropdownContainer>
      <Modal
        show={loginModal}
        setShow={setLoginModal}
        setLogged={setLogged}
        hisuiPokedex={hisuiPokedex}
      />
    </NavbarContainer>
  )
}

export default Navbar