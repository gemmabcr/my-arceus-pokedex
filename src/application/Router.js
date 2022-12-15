import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PageLayout from './PageLayout'
import { areaText, links } from '../data'
import MyList from '../pages/MyList/MyList'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'
import PokemonList from '../pages/PokemonList/PokemonList'
import { PokeService } from '../service/pokeService'
import MyTeam from '../pages/MyTeam/MyTeam'
import { useProviderContext } from './Provider'

const Router = () => {
  const logged = useProviderContext()
  const [hisuiPokedex, setHisuiPokedex] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const pokeService = PokeService.getInstance()
    pokeService.getPokemons()
      .then(data => {
        if (localStorage.getItem('savedPokedex') !== null) {
          setHisuiPokedex(JSON.parse(localStorage.getItem('savedPokedex')))
        } else {
          setHisuiPokedex(data)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  const costaText = areaText.costa
  const costaPokedex = hisuiPokedex.filter(pokemon => {
    return pokemon.locations.find(location => location.area === costaText)
  })
  const distorsionText = areaText.distorsion
  const distorsionPokedex = hisuiPokedex.filter(pokemon => {
    return pokemon.locations.find(location => location.area === distorsionText)
  })
  const laderaText = areaText.ladera
  const laderaPokedex = hisuiPokedex.filter(pokemon => {
    return pokemon.locations.find(location => location.area === laderaText)
  })
  const pantanalText = areaText.pantanal
  const pantanalPokedex = hisuiPokedex.filter(pokemon => {
    return pokemon.locations.find(location => location.area === pantanalText)
  })
  const praderaText = areaText.pradera
  const praderaPokedex = hisuiPokedex.filter(pokemon => {
    return pokemon.locations.find(location => location.area === praderaText)
  })
  const tundraText = areaText.tundra
  const tundraPokedex = hisuiPokedex.filter(pokemon => {
    return pokemon.locations.find(location => location.area === tundraText)
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={'/'} element={<PokemonList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.pradera}
                 element={
            <PokemonList
              firstLoading={loading}
              hisuiPokedex={praderaPokedex}
              setHisuiPokedex={setHisuiPokedex}
              area={areaText.pradera}
            />}
          />
          <Route path={links.pantanal}
                 element={
            <PokemonList
              firstLoading={loading}
              hisuiPokedex={pantanalPokedex}
              setHisuiPokedex={setHisuiPokedex}
              area={areaText.pantanal}
            />}
          />
          <Route path={links.costa}
                 element={
            <PokemonList
              firstLoading={loading}
              hisuiPokedex={costaPokedex}
              setHisuiPokedex={setHisuiPokedex}
              area={areaText.costa}
            />}
          />
          <Route path={links.ladera}
                 element={
            <PokemonList
              firstLoading={loading}
              hisuiPokedex={laderaPokedex}
              setHisuiPokedex={setHisuiPokedex}
              area={areaText.ladera}
            />}
          />
          <Route path={links.tundra}
                 element={
            <PokemonList
              firstLoading={loading}
              hisuiPokedex={tundraPokedex}
              setHisuiPokedex={setHisuiPokedex}
              area={areaText.tundra}
            />}
          />
          <Route path={links.distorsion}
                 element={
            <PokemonList
              firstLoading={loading}
              hisuiPokedex={distorsionPokedex}
              setHisuiPokedex={setHisuiPokedex}
              area={areaText.distorsion}
            />}
          />

          <Route path={'pokemon/:id'}
                 element={<PokemonDetail firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.myList}
                 element={ logged ? <MyList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} /> : <Navigate to={'/'} />}
          />
          <Route path={links.myTeam}
                 element={ logged ? <MyTeam firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} /> : <Navigate to={'/'} />}
          />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
