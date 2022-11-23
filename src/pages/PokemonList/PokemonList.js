import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import {PokeService} from '../../service/pokeService'
import Loading from '../../components/Loading/Loading'

const PokemonList = () => {
  const [hisuiPokedex, setHisuiPokedex] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = PokeService.getInstance()
    pokeService.getPokemons()
      .then(data => setHisuiPokedex(data))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
  },[])

  return (
    <PokemonListContainer>
      <h3>Pokémons de Hisui</h3>
      {loading && <Loading />}
      {!loading &&
        <PokemonListContent>
          {hisuiPokedex.map(pokemon =>
            <Link
              key={pokemon.index}
              to={`/pokemon/${pokemon.index}`}
              state={{ urlPokemon: pokemon.url }}
            >
              <PokemonCard
                urlPokemon={pokemon.url}
                index={pokemon.index}
                todos={pokemon.toDos}
              />
            </Link>
          )}
        </PokemonListContent>
      }
    </PokemonListContainer>
  )
}

export default PokemonList
