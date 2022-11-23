import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import { loggedUsername } from '../../commonFunctions'
import { FlexRow } from '../../commonStyled'
import CompletedPokemon from '../../components/CompletedPokemon/CompletedPokemon'
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
          <h4>Pokémons completados</h4>
          {completedPokemons.length > 0 &&
            <FlexRow style={{flexWrap: 'wrap'}}>
              {completedPokemons.map(completedPokemon =>
                <CompletedPokemon
                  key={completedPokemon.name}
                  urlPokemon={completedPokemon.url}
                  index={completedPokemon.index}
                />
              )}
            </FlexRow>
          }
          {uncompletedPokemons.length > 0 &&
            <Fragment>
              <h4>Pokémons en progreso</h4>
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
            </Fragment>
          }
        </PokemonListContent>
      }
    </PokemonListContainer>
  )
}

export default MyList
