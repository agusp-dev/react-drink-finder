import React, { useContext } from 'react'
import { DrinksCtx } from '../context'
import { Drink } from '../components'

const DrinkList = () => {

  const { drinks } = useContext(DrinksCtx)

  return (
    <div className='row mt-5'>
      {drinks && (
        drinks.map(d => 
          <Drink 
            key={ d.idDrink } 
            strDrink={ d.strDrink }
            strDrinkThumb={ d.strDrinkThumb }/>)
      )}
    </div>
  )
}

export { DrinkList }