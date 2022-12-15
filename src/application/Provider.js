import React, { createContext, useContext } from 'react'

export const AppProvider = createContext()
export const useProviderContext = () => useContext(AppProvider)

const Provider = ({ children }) => {
  const [logged, setLogged] = React.useState(() => {
    return JSON.parse(localStorage.getItem('logged')) === true
  })

  return (
    <AppProvider.Provider
      value={[logged, setLogged]}
    >
      {children}
    </AppProvider.Provider>
  )
}

export default Provider
