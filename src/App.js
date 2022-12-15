import React from 'react'
import Router from './application/Router'
import Provider from './application/Provider'

const App = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App
