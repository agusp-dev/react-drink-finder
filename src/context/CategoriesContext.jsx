import React, { createContext, useState,  useEffect } from 'react'
import { cocktailsApi } from '../api'

//context creation
export const CategoriesCtx = createContext() 

//Provider that contains functions and state
const CategoriesContext = props => {

  useEffect(() => {
    const getCategories = async () => {
      const res = await cocktailsApi.getCategories()
      processGetCategoriesResult(res)
    }
    getCategories()
  }, [])

  const processGetCategoriesResult = result => {
    if (result.status !== 200 ) return alert(`Error: ${ result.statusText }`)
    const { drinks } = result.data
    setCategories( drinks.map( cat => cat.strCategory ) )
  }

  //state of Context
  const [categories, setCategories] = useState([])

  return (
    <CategoriesCtx.Provider
      value={{
        categories
      }}
    > { props.children }
    </CategoriesCtx.Provider>
  )
}

export { CategoriesContext }