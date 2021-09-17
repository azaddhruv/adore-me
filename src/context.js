import React, { useContext, useReducer } from 'react'
import { data } from './components/data'
import reducer from './reducer'

const AppContext = React.createContext()

const initialState = {
  loading: false,
  animals: data,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addAnimal = (newAnimal) => {
    console.log(newAnimal)
    dispatch({ type: 'ADD_ANIMAL', payload: newAnimal })
  }

  return (
    <AppContext.Provider value={{ ...state, addAnimal }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
