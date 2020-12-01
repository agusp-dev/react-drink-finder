import React, { Fragment } from 'react'
import { Header, Form } from './components'
import { CategoriesContext } from  './context'

function App() {
  return (
    <CategoriesContext>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Form />
        </div>
      </div>
    </CategoriesContext>
  );
}

export default App;
