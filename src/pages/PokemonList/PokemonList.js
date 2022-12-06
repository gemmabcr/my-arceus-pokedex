import React from 'react'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'
import { useLoggedContext } from '../../App'

const PokemonList = ({ firstLoading, hisuiPokedex, setHisuiPokedex, area = 'Hisui' }) => {
  const logged = useLoggedContext()
  const [searchPokemon, setSearchPokemon] = React.useState('')

  function searchChange (event) {
    setSearchPokemon(event.target.value)
  }

  function filteredList () {
    return hisuiPokedex.filter(item => {
      const title = item.name
      const lowerTitle = title.toLowerCase()
      const lowerSearch = searchPokemon.toLowerCase()
      return lowerTitle.includes(lowerSearch)
    })
  }

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
        <input
          id={ 'searchPokemon' }
          name={ 'searchPokemon' }
          placeholder='Search by name'
          value={ searchPokemon }
          onChange={ searchChange }
        />
        { searchPokemon === '' && hisuiPokedex.map(pokemon =>
          <PokemonCard
            key={pokemon.index}
            urlPokemon={pokemon.url}
            index={pokemon.index}
            todos={pokemon.toDos}
            setHisuiPokedex={setHisuiPokedex}
            hisuiPokedex={hisuiPokedex}
          />
        ) }
        { searchPokemon !== '' && filteredList().map(pokemon =>
          <PokemonCard
            key={pokemon.index}
            urlPokemon={pokemon.url}
            index={pokemon.index}
            todos={pokemon.toDos}
            setHisuiPokedex={setHisuiPokedex}
            hisuiPokedex={hisuiPokedex}
          />
        ) }
      </PokemonListContent>
    </PokemonListContainer>
  )
}

export default PokemonList
