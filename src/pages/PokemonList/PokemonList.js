import React from 'react'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'
import { FlexRow } from '../../commonStyled'
import { useProviderContext } from '../../application/Provider'

const PokemonList = ({ firstLoading, hisuiPokedex, setHisuiPokedex, area = 'Hisui' }) => {
  const logged = useProviderContext()
  const [searchPokemon, setSearchPokemon] = React.useState('')
  const [searchNum, setSearchNum] = React.useState('')

  function filtredPokedex () {
    let filtredPokedex = hisuiPokedex
    if (area !== 'Hisui') {
      filtredPokedex = filtredPokedex.filter(pokemon => {
        return pokemon.locations.find(location => location.area === area)
      })
    }
    if (searchPokemon !== '') {
      filtredPokedex = filtredPokedex.filter(item => {
        const title = item.name
        const lowerTitle = title.toLowerCase()
        const lowerSearch = searchPokemon.toLowerCase()
        return lowerTitle.includes(lowerSearch)
      })
    }
    if (searchNum !== '') {
      filtredPokedex = filtredPokedex.filter(item => {
        return Number(searchNum) === item.index
      })
    }
    return filtredPokedex
  }

  function searchNameChange (event) {
    setSearchPokemon(event.target.value)
    setSearchNum('')
    filtredPokedex()
  }

  function searchNumChange (event) {
    setSearchNum(event.target.value)
    setSearchPokemon('')
    filtredPokedex()
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
        { filtredPokedex().map(pokemon =>
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
