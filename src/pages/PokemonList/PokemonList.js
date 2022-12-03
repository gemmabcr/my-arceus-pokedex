import React from 'react'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'
import { useLoggedContext } from '../../App'

const PokemonList = ({ firstLoading, hisuiPokedex, setHisuiPokedex, area = 'Hisui' }) => {
  const [logged, setLogged] = useLoggedContext()

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
      <PokemonListContent>
        {hisuiPokedex.map(pokemon =>
          <PokemonCard
            key={pokemon.index}
            urlPokemon={pokemon.url}
            index={pokemon.index}
            todos={pokemon.toDos}
            setHisuiPokedex={setHisuiPokedex}
            hisuiPokedex={hisuiPokedex}
          />
        )}
      </PokemonListContent>
    </PokemonListContainer>
  )
}

export default PokemonList
