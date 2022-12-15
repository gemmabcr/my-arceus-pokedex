import React from 'react'
import { FlexRow } from '../../commonStyled'
import { FilterContainer, PokemonListContent } from '../../pages/PokemonList/PokemonListStyled'
import PokemonCard from '../PokemonCard/PokemonCard'

const ShowPokedex = ({ hisuiPokedex, setHisuiPokedex, area = 'Hisui' }) => {
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

  return (
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
      { filteredPokedex().length > 0 && filteredPokedex().map(pokemon =>
        <PokemonCard
          key={pokemon.index}
          urlPokemon={pokemon.url}
          index={pokemon.index}
          todos={pokemon.toDos}
          setHisuiPokedex={setHisuiPokedex}
          hisuiPokedex={hisuiPokedex}
        />
      ) }
      { filteredPokedex().length === 0 &&
        <FlexRow>
          <p style={{ marginBottom: 0 }}>Sorry no pokemon is found!</p>
          <img
            height={80}
            width={80}
            src={'https://www.pngmart.com/files/12/Pokemon-Detective-Pikachu-Movie-PNG-HD.png'}
            alt='no results'
          />
        </FlexRow>
      }
    </PokemonListContent>
  )
}

export default ShowPokedex
