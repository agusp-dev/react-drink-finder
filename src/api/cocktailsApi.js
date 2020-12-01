import axios from 'axios'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

/**
 * https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
 * https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
   https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail
   https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007
 */

 const getCategories = async () => {
  const url = `${URL}/list.php?c=list`
  const result = await axios.get(url)
  return result
 }

 const getSufix  = (i, c) => {
  let sufix = ''
  let ingredient = false 
  if (i) {
    sufix = `i=${i}`
    ingredient = true
  }
  if (c) {
    if( ingredient ) {
      sufix += `&c=${c}`
    } else {
      sufix += `c=${c}`
    }
  }
  return sufix
 }

 const getDrinks = async ( ingredient, category ) => {  
  const url = `${ URL }/filter.php?${ getSufix(ingredient, category) }`
  const result = await axios.get(url)
  return result
 }

 const getDrinkDetail = async id => {
  const url = `${ URL }/lookup.php?i=${id}`
  const result = await axios.get(url)
  return result
 }

 export const cocktailsApi = {
  getCategories,
  getDrinks,
  getDrinkDetail
 }