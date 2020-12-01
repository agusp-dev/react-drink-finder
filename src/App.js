import React from 'react'
import { Header, Form, DrinkList } from './components'
import { CategoriesContext, DrinksContext } from  './context'

function App() {
  return (
    <CategoriesContext>
      <DrinksContext>
        <Header />
        <div className='container mt-5'>
          <div className='row'>
            <Form />
          </div>
          <DrinkList />
        </div>
      </DrinksContext>
    </CategoriesContext>
  );
}

export default App;
