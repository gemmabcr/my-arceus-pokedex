import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal/Modal'
import { Header, LogoArceus, LoginContainer, LinksMenu, LinkMenu, LogoContainer } from './NavbarStyled'
import { useLoggedContext } from '../../application/PageLayout'
import { PrimaryButton } from '../../commonStyled'
import { costaText, distorsionText, laderaText, pantanalText, pokemonLogo, praderaText, tundraText } from '../../data'

export const generalTabs = [
  {
    link: '/',
    name: 'Todo Hisui'
  },
  {
    link: '/pradera-obsidiana',
    name: praderaText
  },
  {
    link: '/pantanal-carmesi',
    name: pantanalText
  },
  {
    link: '/costa-cobalto',
    name: costaText
  },
  {
    link: '/ladera-corona',
    name: laderaText
  },
  {
    link: '/tundra-alba',
    name: tundraText
  },
  {
    link: '/distorion-espaciotemporal',
    name: distorsionText
  },
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

  function loggedUsername(){
    return JSON.parse(localStorage.getItem('username'))
  }

  return (
    <div>
      <Header>
        <h1>Pokédex tracking list</h1>
        <LogoContainer>
          <LogoArceus src={pokemonLogo} alt='Pokemon Leyendas: Arceus' />
        </LogoContainer>
        {!logged &&
          <LoginContainer>
            <PrimaryButton onClick={()=> loginButton()}>
              Log in
            </PrimaryButton>
          </LoginContainer>
        }
        {logged &&
          <LoginContainer>
            <p>{loggedUsername()}</p>
            <PrimaryButton onClick={()=> logoutButton()}>
              Log Out
            </PrimaryButton>
          </LoginContainer>
        }
      </Header>
      <LinksMenu>
        {generalTabs.map(tab =>
          <LinkMenu key={tab.name}>
            <Link to={tab.link}>
              {tab.name}
            </Link>
          </LinkMenu>
        )}
        <LinkMenu>
          {logged &&
            <Link to={'/myList'}>
              My list
            </Link>
          }
        </LinkMenu>
      </LinksMenu>
      <Modal
        show={loginModal}
        setShow={setLoginModal}
        setLogged={setLogged}
      />
    </div>
  )
}

export default Navbar