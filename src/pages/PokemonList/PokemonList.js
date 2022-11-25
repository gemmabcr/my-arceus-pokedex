import React from 'react'
import { PokemonListContainer, PokemonListContent } from './PokemonListStyled'
import Loading from '../../components/Loading/Loading'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { PokeService } from '../../service/pokeService'

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
            <PokemonCard
              key={pokemon.index}
              urlPokemon={pokemon.url}
              index={pokemon.index}
              todos={pokemon.toDos}
            />
          )}
        </PokemonListContent>
      }
    </PokemonListContainer>
  )
}

export default PokemonList
