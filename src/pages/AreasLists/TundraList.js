import React from 'react'
import { Link } from 'react-router-dom'
import { PokemonListContainer, PokemonListContent } from '../PokemonList/PokemonListStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import { PokeService } from '../../service/pokeService'
import Loading from '../../components/Loading/Loading'
import { tundraText } from '../../data'

const TundraList = () => {
  const [hisuiPokedex, setHisuiPokedex] = React.useState([])
  const [showPokedex, setShowPokedex] = React.useState(hisuiPokedex)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = PokeService.getInstance()
    pokeService.getPokemons()
      .then(data => setHisuiPokedex(data))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))

    const costaPokedex = hisuiPokedex.filter(pokemon =>{
      return pokemon.locations.find(location => location.area === tundraText)
    })
    setShowPokedex(costaPokedex)
  },[hisuiPokedex])

  return (
    <PokemonListContainer>
      <h3>Pokémons de {tundraText}</h3>
      {loading && <Loading />}
      {!loading &&
        <PokemonListContent>
          {showPokedex.map(pokemon =>
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

export default TundraList
