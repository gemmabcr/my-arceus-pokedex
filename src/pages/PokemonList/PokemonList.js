import React from 'react'
import { PokemonListContainer } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'
import { useProviderContext } from '../../application/Provider'
import ShowPokedex from '../../components/ShowPokedex/ShowPokedex'

const PokemonList = ({ firstLoading, hisuiPokedex, setHisuiPokedex, area = 'Hisui' }) => {
  const logged = useProviderContext()

  if (firstLoading) {
    return (
      <Loading />
    )
  }

  return (
    <PokemonListContainer>
      {!logged &&
        <h6>ℹ️. Para poder hacer un seguimiento de tus tareas, debes de <strong>iniciar sesión</strong></h6>
      }
      <PageAreaTitle area={area} />
      <ShowPokedex
        hisuiPokedex={hisuiPokedex}
        setHisuiPokedex={setHisuiPokedex}
        area={area}
      />
    </PokemonListContainer>
  )
}

export default PokemonList
