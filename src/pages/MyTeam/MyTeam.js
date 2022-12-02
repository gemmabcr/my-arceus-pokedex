import React from 'react'
import Loading from '../../components/Loading/Loading'
import { loggedUsername } from '../../commonFunctions'
import MyTeamSection from '../../components/MyTeamSection/MyTeamSection'
import { PokemonListContainer } from '../PokemonList/PokemonListStyled'

const MyTeam = ({firstLoading, hisuiPokedex, setHisuiPokedex}) => {
  if (firstLoading){
    return (
      <Loading />
    )
  }
  return (
    <PokemonListContainer>
      <h3>Equipo Pokémon de {loggedUsername()}</h3>
      <MyTeamSection
        hisuiPokedex={hisuiPokedex}
        setHisuiPokedex={setHisuiPokedex}
      />
    </PokemonListContainer>
  )
}

export default MyTeam