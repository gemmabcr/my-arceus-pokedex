import React from 'react'
import {FinalBannerImg, MainContainer} from './commonStyled'
import {finalBanner} from './data'
import PokemonList from './pages/PokemonList/PokemonList'

const App = () => {
  return (
    <MainContainer>
      <PokemonList />
      <FinalBannerImg alt='Thanks for visiting us' src={finalBanner} />
    </MainContainer>
  )
}

export default App;
