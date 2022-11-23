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

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={'/'} element={<PokemonList />} />
          <Route path={links.pradera} element={<PraderaList />} />
          <Route path={links.pantanal} element={<PantanalList />} />
          <Route path={links.costa} element={<CostaList />} />
          <Route path={links.ladera} element={<LaderaList />} />
          <Route path={links.tundra} element={<TundraList />} />
          <Route path={links.distorsion} element={<DistorsionList />} />
          <Route path={'pokemon/:id'} element={<PokemonDetail />} />
          <Route path={links.myList} element={<MyList />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router