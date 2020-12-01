import React, { createContext, useState, useEffect } from  'react'
import { cocktailsApi } from '../api'

//context creation
const DrinksCtx = createContext()

//Provider that contains functions and state
const DrinksContext = props => {

  const [drinks, setDrinks] = useState([])

  const searchDrinks =  async (ingredient, category) => {
    if (!ingredient && !category) return
    const res = await cocktailsApi.getDrinks(ingredient, category)
    processGetDrinksResult(res)
  }

  const processGetDrinksResult = result => {
    if (result.status !== 200 ) return alert(`Error: ${ result.statusText }`)
    const { drinks } = result.data
    setDrinks(drinks)
  }

  return (
    <DrinksCtx.Provider
      value={{
        drinks,
        searchDrinks
      }}
    >
      { props.children }
    </DrinksCtx.Provider>
  )

}

export { DrinksContext, DrinksCtx }
