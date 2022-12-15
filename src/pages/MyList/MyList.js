import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import { loggedUsername } from '../../commonFunctions'
import CompletedPokemon from '../../components/CompletedPokemon/CompletedPokemon'
import { CompletedPokemonRow } from '../../components/CompletedPokemon/CompletedPokemonStyled'
import { MyListSection } from './MyListStyled'
import Loading from '../../components/Loading/Loading'
import ShowPokedex from '../../components/ShowPokedex/ShowPokedex'
import { FlexColumn } from '../../commonStyled'

const MyList = ({ firstLoading, hisuiPokedex, setHisuiPokedex }) => {
  const completedPokemons = hisuiPokedex.filter(pokemon => pokemon.toDos.every(todo => todo.done >= todo.goal))
  const uncompletedPokemons = hisuiPokedex.filter(pokemon => pokemon.toDos.find(todo => todo.done < todo.goal))

  if (firstLoading) {
    return (
      <Loading />
    )
  }

  return (
    <PokemonListContainer>
      <h3>Pokedéx de {loggedUsername()}</h3>
      <PokemonListContent>
        <MyListSection>
          <h4>Pokémons completados ({completedPokemons.length}/{hisuiPokedex.length})</h4>
          {completedPokemons.length === 0 &&
            <p>😔. Todavía no hay ningún pokemon completado</p>
          }
          {completedPokemons.length > 0 &&
            <CompletedPokemonRow>
              {completedPokemons.map(completedPokemon =>
                <Link
                  key={completedPokemon.name}
                  to={`/pokemon/${completedPokemon.index}`}
                  state={{ urlPokemon: completedPokemon.url }}
                >
                  <CompletedPokemon
                    urlPokemon={completedPokemon.url}
                    index={completedPokemon.index}
                  />
                </Link>
              )}
            </CompletedPokemonRow>
          }
        </MyListSection>
      </PokemonListContent>
      {uncompletedPokemons.length > 0 &&
        <FlexColumn>
          <h4>Pokémons en progreso ({uncompletedPokemons.length}/{hisuiPokedex.length})</h4>
          <ShowPokedex
            hisuiPokedex={uncompletedPokemons}
            setHisuiPokedex={setHisuiPokedex}
          />
        </FlexColumn>
      }
    </PokemonListContainer>
  )
}

export default MyList
