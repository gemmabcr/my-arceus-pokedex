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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={'/'} element={<PokemonList />} />
          <Route path={'/pradera-obsidiana'} element={<PraderaList />} />
          <Route path={'/pantanal-carmesi'} element={<PantanalList />} />
          <Route path={'/costa-cobalto'} element={<CostaList />} />
          <Route path={'/ladera-corona'} element={<LaderaList />} />
          <Route path={'/tundra-alba'} element={<TundraList />} />
          <Route path={'/distorion-espaciotemporal'} element={<DistorsionList />} />
          <Route path={'pokemon/:id'} element={<PokemonDetail />} />
          <Route path={'my-list'} element={<MyList />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router