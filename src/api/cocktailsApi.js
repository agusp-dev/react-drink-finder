import axios from 'axios'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1'

/**
 * https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list
 * https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list
   https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list
 */

 const getCategories = async () => {
  const url = `${URL}/list.php?c=list`
  const result = await axios.get(url)
  return result
 }

 export const cocktailsApi = {
  getCategories
 }