import React from 'react'
import PropTypes from 'prop-types'

const Drink = ({ strDrink, strDrinkThumb }) => {
  return (
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <h2 className='card-header'>{ strDrink }</h2>
        <img className='card-img-top' src={ strDrinkThumb } alt={ strDrink }/>
        <div className='card-body'>
          <button
            type='button'
            className='btn btn-block btn-primary'
            > View Drink
          </button>
        </div>
      </div>
    </div>
  )
}

Drink.propTypes = {
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired
}

export { Drink }