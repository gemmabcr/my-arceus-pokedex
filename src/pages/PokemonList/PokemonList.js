import React from 'react'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'
import { useLoggedContext } from '../../App'
import { FlexRow } from '../../commonStyled'

const PokemonList = ({ firstLoading, hisuiPokedex, setHisuiPokedex, area = 'Hisui' }) => {
  const logged = useLoggedContext()
  const [searchPokemon, setSearchPokemon] = React.useState('')
  const [searchNum, setSearchNum] = React.useState('')

  function searchNameChange (event) {
    setSearchPokemon(event.target.value)
    setSearchNum('')
  }

  function searchNumChange (event) {
    setSearchNum(event.target.value)
    setSearchPokemon('')
  }

  function filteredNameList () {
    return hisuiPokedex.filter(item => {
      const title = item.name
      const lowerTitle = title.toLowerCase()
      const lowerSearch = searchPokemon.toLowerCase()
      return lowerTitle.includes(lowerSearch)
    })
  }

  function filteredNumList () {
    return hisuiPokedex.find(item => item.index === Number(searchNum))
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
        <FlexRow>
          <FlexRow>
            <p>Search by name</p>
            <input
              id={ 'searchPokemon' }
              name={ 'searchPokemon' }
              placeholder='Search by name'
              value={ searchPokemon }
              onChange={ searchNameChange }
            />
          </FlexRow>
          <FlexRow>
            <p>Search by number</p>
            <input
              id={ 'searchNumber' }
              name={ 'searchNumber' }
              placeholder='Search by number'
              value={ searchNum }
              onChange={ searchNumChange }
            />
          </FlexRow>
        </FlexRow>
        { searchPokemon === '' && searchNum === '' && hisuiPokedex.map(pokemon =>
          <PokemonCard
            key={pokemon.index}
            urlPokemon={pokemon.url}
            index={pokemon.index}
            todos={pokemon.toDos}
            setHisuiPokedex={setHisuiPokedex}
            hisuiPokedex={hisuiPokedex}
          />
        ) }
        { searchPokemon !== '' && filteredNameList().map(pokemon =>
          <PokemonCard
            key={pokemon.index}
            urlPokemon={pokemon.url}
            index={pokemon.index}
            todos={pokemon.toDos}
            setHisuiPokedex={setHisuiPokedex}
            hisuiPokedex={hisuiPokedex}
          />
        ) }
        { searchNum !== '' &&
          <PokemonCard
            key={filteredNumList().index}
            urlPokemon={filteredNumList().url}
            index={filteredNumList().index}
            todos={filteredNumList().toDos}
            setHisuiPokedex={setHisuiPokedex}
            hisuiPokedex={hisuiPokedex}
          />
        }
      </PokemonListContent>
    </PokemonListContainer>
  )
}

export default PokemonList
