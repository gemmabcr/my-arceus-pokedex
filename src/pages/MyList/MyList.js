import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import { loggedUsername } from '../../commonFunctions'
import { FlexColumn } from '../../commonStyled'
import CompletedPokemon from '../../components/CompletedPokemon/CompletedPokemon'
import { CompletedPokemonRow } from '../../components/CompletedPokemon/CompletedPokemonStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'

const MyList = () => {
  const hisuiPokedex = JSON.parse(localStorage.getItem('savedPokedex'))
  const completedPokemons = hisuiPokedex.filter(pokemon => pokemon.toDos.every(todo => todo.done === todo.goal))
  const uncompletedPokemons = hisuiPokedex.filter(pokemon => pokemon.toDos.find(todo => todo.done < todo.goal))

  return (
    <PokemonListContainer>
      <h3>Pokedéx de {loggedUsername()}</h3>
      <PokemonListContent>
        {completedPokemons.length > 0 &&
          <FlexColumn>
            <h4>Pokémons completados ({completedPokemons.length}/{hisuiPokedex.length})</h4>
            <CompletedPokemonRow>
              {completedPokemons.map(completedPokemon =>
                <CompletedPokemon
                  key={completedPokemon.name}
                  urlPokemon={completedPokemon.url}
                  index={completedPokemon.index}
                />
              )}
            </CompletedPokemonRow>
          </FlexColumn>
        }
        {uncompletedPokemons.length > 0 &&
          <FlexColumn>
            <h4>Pokémons en progreso ({uncompletedPokemons.length}/{hisuiPokedex.length})</h4>
            {uncompletedPokemons.map(pokemon =>
              <Link
                key={pokemon.index}
                to={`/pokemon/${pokemon.index}`}
                state={{urlPokemon: pokemon.url}}
                style={{width: '100%'}}
              >
                <PokemonCard
                  urlPokemon={pokemon.url}
                  index={pokemon.index}
                  todos={pokemon.toDos}
                />
              </Link>
            )}
          </FlexColumn>
        }
      </PokemonListContent>
    </PokemonListContainer>
  )
}

export default MyList
