import React from 'react'
import { FilterContainer, PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import PageAreaTitle from '../../components/PageAreaTitle/PageAreaTitle'
import { FlexRow } from '../../commonStyled'
import { useProviderContext } from '../../application/Provider'

const PokemonList = ({ firstLoading, hisuiPokedex, setHisuiPokedex, area = 'Hisui' }) => {
  const logged = useProviderContext()
  const [searchName, setSearchName] = React.useState('')
  const [searchNum, setSearchNum] = React.useState('')
  const filters = [
    {
      title: 'Search by name',
      id: 'name',
      name: 'name'
    },
    {
      title: 'Search by number',
      id: 'number',
      name: 'number'
    }
  ]

  function filteredPokedex () {
    let filteredPokedex = hisuiPokedex
    if (area !== 'Hisui') {
      filteredPokedex = filteredPokedex.filter(pokemon => {
        return pokemon.locations.find(location => location.area === area)
      })
    }
    if (searchName !== '') {
      filteredPokedex = filteredPokedex.filter(item => {
        const title = item.name
        const lowerTitle = title.toLowerCase()
        const lowerSearch = searchName.toLowerCase()
        return lowerTitle.includes(lowerSearch)
      })
    }
    if (searchNum !== '') {
      filteredPokedex = filteredPokedex.filter(item => {
        return Number(searchNum) === item.index
      })
    }
    return filteredPokedex
  }

  function searchChange (event) {
    const { name, value } = event.target
    if (name === 'name') {
      setSearchName(value)
      setSearchNum('')
    }
    if (name === 'number') {
      setSearchNum(value)
      setSearchName('')
    }
    filteredPokedex()
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
          { filters.map(filter =>
            <FilterContainer key={filter.id}>
              <p>{filter.title}</p>
              <input
                id={filter.id}
                name={filter.name}
                placeholder={filter.title}
                value={filter.name === 'name' ? searchName : searchNum}
                onChange={searchChange}
              />
            </FilterContainer>
          )}
        </FlexRow>
        { filteredPokedex().map(pokemon =>
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
