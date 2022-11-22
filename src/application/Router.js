import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageLayout from './PageLayout'
import PokemonList from '../pages/PokemonList/PokemonList'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'
import MyList from "../pages/MyList/MyList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path={'/'} element={<PokemonList />} />
          <Route path={'pokemon/:id'} element={<PokemonDetail />} />
          <Route path={'myList'} element={<MyList />} />
          <Route path='*' element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router