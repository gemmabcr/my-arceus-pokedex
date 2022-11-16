import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonList from '../pages/PokemonList/PokemonList'
import PokemonDetail from '../pages/PokemonDetail/PokemonDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<PokemonList />} />
        <Route path={'pokemon/:id'} element={<PokemonDetail />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </BrowserRouter>

  )
}

export default Router