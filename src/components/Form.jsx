import React, { useContext, useState } from 'react'
import { CategoriesCtx } from '../context'

const Form = () => {

  const { categories } = useContext(CategoriesCtx)

  const [searchData, setSearchData] = useState({
    ingredient: '',
    category: ''
  })

  const onHandleChangeValues = e => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value
    })
  }

  const setCategoriesSelect = () => 
    categories.map( c => <option key={ c } value={ c }>{ c }</option> )

  return (
    <form className='col-12'>
      <fieldset className='text-center'>
        <legend>Search drinks by category or ingredients</legend>
      </fieldset>
      <div className='row mt-4'>
        <div className='col-md-4'>
          <input
            className='form-control'
            name='ingredient'
            type='text'
            placeholder='Search by ingredient'
            onChange={ onHandleChangeValues }
          />
        </div>
        <div className='col-md-4'>
          <select
            className='form-control'
            name='category'
            onChange={ onHandleChangeValues }
          >
            <option value="">-- Select Category --</option>
            { categories && setCategoriesSelect() }
          </select>
        </div>
        <div className='col-md-4'>
          <input 
            type='submit'
            className='btn btn-block btn-primary'
            value='Search Drinks'/>
        </div>
      </div>
    </form>
  )
}

export { Form }