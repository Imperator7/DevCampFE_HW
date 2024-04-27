import { useState } from 'react'
import { Form, Field, Formik} from 'formik'
import { object, string } from 'yup'
import '../src/App.css'

function App() {

  return (
    <>
      <div className='form-box'>
        <img src="../src/assets/aazg21uqg.png" style={{width: '35px'}}/>
        <span>CLARITY</span>
        <h3>Select places you like to go.</h3>
        <span>The places that refresh your energy</span>
        <Formik
        initialValues={{
          mountain: false,
          ocean: false,
          river: false,
          forest: false,
          savanna: false,
        }}
        onSubmit={(FormData) => {
          // submit to the endpoint
          console.log(FormData)
        }}>
            <div>
              <Form className='form'>
                <div>
                  <Field type="checkbox" name='mountain'/><label>  Mountain</label>
                </div>
                <div>
                  <Field type="checkbox" name='ocean'/><label>  Ocean</label>
                </div>
                <div>
                  <Field type="checkbox" name='river'/><label>  River</label>
                </div>
                <div>
                  <Field type="checkbox" name='forest'/><label>  Forest</label>
                </div>
                <div>
                  <Field type="checkbox" name='savanna'/><label>  Savanna</label>
                </div>
                <button type="submit" className='btn-login'>submit</button>
              </Form>
            </div>
        </Formik>
      </div>
    </>
  )
}

export default App
