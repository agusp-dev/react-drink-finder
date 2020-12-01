import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles'
import { cocktailsApi } from '../api'

const getModalStyle = () => {
  const top = 50 ;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Drink = ({ 
  idDrink, 
  strDrink, 
  strDrinkThumb
}) => {

  const classes = useStyles()
  
  //Material UI Modal config 
  const [ modalStyle ] = useState(getModalStyle)
  const [open, setOpen] = useState(false)

  const [selectedDrinkId, setSelectedDrinkId] = useState('')
  const [drinkDetail, setDrinkDetail] = useState({})

  useEffect(() => {
    const getDrinkDetail = async () => {
      if (!selectedDrinkId) return
      const res = await cocktailsApi.getDrinkDetail(selectedDrinkId)
      console.log('Drink selected', selectedDrinkId, res)
      processGetDrinkDetailResult(res)
    }
    getDrinkDetail()
  }, [selectedDrinkId])

  const processGetDrinkDetailResult = result => {
    if (result.status !== 200) return alert(`Error: ${ result.statusText }`)
    const { drinks } = result.data
    if (drinks && drinks.length > 0) {
      setDrinkDetail(drinks[0])
    }
  }


  const onHandleDrinkSelected = () => {
    setSelectedDrinkId(idDrink)
    onHandleOpen(true)
  }

  const onHandleOpen = () => {
    setOpen(true)
  }

  const onHandleClose = () => {
    setOpen(false)
  }
  
  const getIngredients = () => {
    let ingredients = []
    for( let i=1; i<16; i++ ) {
      const ingredient = drinkDetail[`strIngredient${ i }`]
      if (ingredient) {
        ingredients.push(<li>{ ingredient }</li>)
      }
    }
    return ingredients
  }

  return (
    <div className='col-md-4 mb-3'>
      <div className='card'>
        <h2 className='card-header'>{ strDrink }</h2>
        <img className='card-img-top' src={ strDrinkThumb } alt={ strDrink }/>
        <div className='card-body'>
          <button
            type='button'
            className='btn btn-block btn-primary'
            onClick={ onHandleDrinkSelected }
            > View Drink
          </button>
        </div>
      </div>
      {selectedDrinkId && (
        <Modal 
          open={ open }
          onClose={ onHandleClose }>
          <div 
            style={ modalStyle } 
            className={ classes.paper }>
              <h2>{ strDrink }</h2>
              <h3 className='mt-4'>Instructions:</h3>
              <p>{ 
                drinkDetail && 
                Object.keys(drinkDetail).length > 0 
                && drinkDetail.strInstructions 
              }</p>
              <img 
                className='img-fluid my-4'
                src={ 
                  drinkDetail && 
                  Object.keys(drinkDetail).length > 0 
                  && drinkDetail.strDrinkThumb 
                } 
                alt='Drink detail'
              />
              <h3>Ingredients</h3>
              <ul>
                { getIngredients() }
              </ul>
          </div>
        </Modal>
      )}
    </div>
  )
}

Drink.propTypes = {
  idDrink: PropTypes.string.isRequired,
  strDrink: PropTypes.string.isRequired,
  strDrinkThumb: PropTypes.string.isRequired
}

export { Drink }