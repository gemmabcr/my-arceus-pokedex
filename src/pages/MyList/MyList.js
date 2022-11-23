import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import { loggedUsername } from '../../commonFunctions'
import { FlexColumn } from '../../commonStyled'
import CompletedPokemon from '../../components/CompletedPokemon/CompletedPokemon'
import { CompletedPokemonRow } from '../../components/CompletedPokemon/CompletedPokemonStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { PokeService } from '../../service/pokeService'

const MyList = () => {
  const [hisuiPokedex, setHisuiPokedex] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = PokeService.getInstance()
    pokeService.getPokemons()
      .then(data => setHisuiPokedex(data))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
  },[])

  const completedPokemons = hisuiPokedex.filter(pokemon => pokemon.toDos.every(todo => todo.done === todo.goal))
  const uncompletedPokemons = hisuiPokedex.filter(pokemon => pokemon.toDos.find(todo => todo.done < todo.goal))

  return (
    <PokemonListContainer>
      <h3>Pokedéx de {loggedUsername()}</h3>
      {loading && <Loading />}
      {!loading &&
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
      }
    </PokemonListContainer>
  )
}

export default MyList
