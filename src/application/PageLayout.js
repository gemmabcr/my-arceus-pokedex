import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  MainContainer,
  ContentContainer,
  FinalBannerImg,
  ScrollTopButton
} from '../commonStyled'
import Navbar from '../components/Navbar/Navbar'
import { finalBanner } from '../data'
import { scrollToTop } from '../commonFunctions'
import UpIcon from '../components/ui/UpIcon'

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
      <ScrollTopButton onClick={scrollToTop}>
        <UpIcon />
      </ScrollTopButton>
    </MainContainer>
  )
}

export default PageLayout
