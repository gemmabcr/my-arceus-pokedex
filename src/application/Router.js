import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PageLayout from './PageLayout'
import { useLoggedContext } from '../App'
import { links } from '../data'
import CostaList from '../pages/AreasLists/CostaList'
import DistorsionList from '../pages/AreasLists/DistorsionList'
import LaderaList from '../pages/AreasLists/LaderaList'
import PantanalList from '../pages/AreasLists/PantanalList'
import PraderaList from '../pages/AreasLists/PraderaList'
import TundraList from '../pages/AreasLists/TundraList'
import MyList from '../pages/MyList/MyList'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'
import PokemonList from '../pages/PokemonList/PokemonList'
import { PokeService } from '../service/pokeService'

const Router = () => {
  const [logged, setLogged] = useLoggedContext()
  const [hisuiPokedex, setHisuiPokedex] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  React.useEffect(()=>{
    const pokeService = PokeService.getInstance()
    pokeService.getPokemons()
      .then(data => {
        if (localStorage.getItem('savedPokedex')!== null) {
          setHisuiPokedex(JSON.parse(localStorage.getItem('savedPokedex')))
        }
        else {
          setHisuiPokedex(data)
        }
      })
      .catch((error)=>console.log(error))
      .finally(()=>setLoading(false))
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={'/'} element={<PokemonList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.pradera}
                 element={<PraderaList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.pantanal}
                 element={<PantanalList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.costa}
                 element={<CostaList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.ladera}
                 element={<LaderaList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.tundra}
                 element={<TundraList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.distorsion}
                 element={<DistorsionList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={'pokemon/:id'}
                 element={<PokemonDetail firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.myList}
                 element={ logged ? <MyList firstLoading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} /> : <Navigate to={'/'} />}
          />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router