import React, { Fragment } from 'react'
import { Header, Form } from './components'

function App() {
  return (
    <Fragment>
      <Header />
      <div className='container mt-5'>
        <div className='row'>
          <Form />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
