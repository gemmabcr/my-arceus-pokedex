import React from 'react'
import { Outlet } from 'react-router-dom'
import { MainContainer, ContentContainer, FinalBannerImg } from '../commonStyled'
import Navbar from '../components/Navbar/Navbar'
import { finalBanner } from '../data'

const PageLayout = () => {
  return (
    <MainContainer id='mainContainer'>
      <Navbar />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
      <FinalBannerImg
        alt='Thanks for visiting us'
        src={finalBanner}
      />
    </MainContainer>
  )
}

export default PageLayout
