import React from 'react'

const Form = () => {
  return (
    <form className='col-12'>
      <fieldset className='text-center'>
        <legend>Search drinks by category or ingredients</legend>
      </fieldset>
      <div className='row mt-4'>
        <div className='col-md-4'>
          <input
            className='form-control'
            name='name'
            type='text'
            placeholder='Search by ingredients'
          />
        </div>
        <div className='col-md-4'>
          <select
            className='form-control'
            name='category'
          >
            <option value="">-- Select Category --</option>
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