import React from 'react'
import {PokemonListContainer, LogoArceus} from './PokemonListStyled'
import {FlexRow} from '../../commonStyled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import {areasLogos, pokemonLogo} from '../../data'

const praderaLogo = areasLogos.praderaObsidiana

const PokemonList = () => {
  const [hisuiPokedex, setHisuiPokedex] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const POKEDEX_API = 'https://pokeapi.co/api/v2/pokedex/30/'
    fetch(POKEDEX_API)
      .then((response) => response.json())
      .then(data => setHisuiPokedex(data.pokemon_entries))
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
  },[])

  return (
    <PokemonListContainer>
      <h1>This is my tracking list of my arceus pokedex</h1>
      <LogoArceus src={pokemonLogo} alt='Pokemon Leyendas: Arceus' />
      <FlexRow>
        <img src={praderaLogo} alt='Pradera Obsidiana' />
        <h3>Pradera Obsidiana</h3>
      </FlexRow>
      {loading && <p>Loading... </p>}
      {!loading &&
        <div className='pokemonList'>
          {hisuiPokedex.map(pokemon =>
            <PokemonCard
              key={pokemon.entry_number}
              urlPokemon={pokemon.pokemon_species.url}
              index={pokemon.entry_number}
            />
          )}
        </div>
      }
    </PokemonListContainer>
  )
}

export default PokemonList
