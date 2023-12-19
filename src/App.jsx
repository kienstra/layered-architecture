import './styles.css'
import React, { createContext, useReducer } from 'react'
import { reducer } from './Store/reducer'
import initialState from './Store/initialState'
import CheckboxComponent from './Checkbox/CheckboxComponent'

export const AppContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <AppContext.Provider value={{dispatch, state}}>
        <CheckboxComponent />
      </AppContext.Provider>
    </div>
  );
}
