import React, {createContext, useContext} from 'react'
import { Outlet } from 'react-router-dom'
import { MainContainer, ContentContainer, FinalBannerImg } from '../commonStyled'
import Navbar from '../components/Navbar/Navbar'
import { finalBanner } from '../data'

export const AppProvider = createContext()
export const useLoggedContext = () => useContext(AppProvider)

const Provider = ({ children }) => {
  const [logged, setLogged] = React.useState(()=>{
    return JSON.parse(localStorage.getItem('logged')) === true
  })

  return (
    <AppProvider.Provider value={[logged, setLogged]}>
      {children}
    </AppProvider.Provider>
  )
}

const PageLayout = () => {
  return (
    <MainContainer>
      <Provider>
        <Navbar />
        <ContentContainer>
          <Outlet />
        </ContentContainer>
        <FinalBannerImg
          alt='Thanks for visiting us'
          src={finalBanner}
        />
      </Provider>
    </MainContainer>
  )
}

export default PageLayout
