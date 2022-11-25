import React, { createContext, useContext } from 'react'
import Router from './application/Router'

export const AppProvider = createContext()
export const useLoggedContext = () => useContext(AppProvider)

const Provider = ({ children }) => {
  const [logged, setLogged] = React.useState(()=>{
    return JSON.parse(localStorage.getItem('logged')) === true
  })

  return (
    <AppProvider.Provider value={[logged, setLogged]}>
      {children}
    </AppProvider.Provider>
  )
}

const App = () => {
  return (
    <Provider>
      <Router />
    </Provider>
  )
}

export default App;
