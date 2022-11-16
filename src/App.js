import React from 'react'
import Router from './application/Router'
import { FinalBannerImg, MainContainer } from './commonStyled'
import { finalBanner } from './data'

const App = () => {
  return (
    <MainContainer>
      <Router />
      <FinalBannerImg alt='Thanks for visiting us' src={finalBanner} />
    </MainContainer>
  )
}

export default App;
