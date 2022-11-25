import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './PageLayout'
import CostaList from '../pages/AreasLists/CostaList'
import DistorsionList from '../pages/AreasLists/DistorsionList'
import LaderaList from '../pages/AreasLists/LaderaList'
import PantanalList from '../pages/AreasLists/PantanalList'
import PraderaList from '../pages/AreasLists/PraderaList'
import TundraList from '../pages/AreasLists/TundraList'
import MyList from '../pages/MyList/MyList'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'
import PokemonList from '../pages/PokemonList/PokemonList'
import { links } from '../data'
import {PokeService} from "../service/pokeService";

const Router = () => {
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
          <Route path={'/'} element={<PokemonList loading={loading} hisuiPokedex={hisuiPokedex} setHisuiPokedex={setHisuiPokedex} />}
          />
          <Route path={links.pradera}
                 element={<PraderaList loading={loading} hisuiPokedex={hisuiPokedex} />}
          />
          <Route path={links.pantanal}
                 element={<PantanalList loading={loading} hisuiPokedex={hisuiPokedex} />}
          />
          <Route path={links.costa}
                 element={<CostaList loading={loading} hisuiPokedex={hisuiPokedex} />}
          />
          <Route path={links.ladera}
                 element={<LaderaList loading={loading} hisuiPokedex={hisuiPokedex} />}
          />
          <Route path={links.tundra}
                 element={<TundraList loading={loading} hisuiPokedex={hisuiPokedex} />}
          />
          <Route path={links.distorsion}
                 element={<DistorsionList loading={loading} hisuiPokedex={hisuiPokedex}
          />} />
          <Route path={'pokemon/:id'}
                 element={<PokemonDetail loading={loading} hisuiPokedex={hisuiPokedex} />}
          />
          <Route path={links.myList}
                 element={<MyList loading={loading} hisuiPokedex={hisuiPokedex} />}
          />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router