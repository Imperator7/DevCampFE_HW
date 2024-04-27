import { useState } from 'react'
import { Form, Field, Formik} from 'formik'
import '../src/App.css'

function App() {

  return (
    <>
      <div className='form-box'>
        <img src="../src/assets/aazg21uqg.png" style={{width: '35px'}}/>
        <span>CLARITY</span>
        <h3>Log in</h3>
        <span>Continue you design journey with Clarity</span>
        <Formik
        initialValues={{
          email: '',
          password: '',
          saveId: false,
        }}
        onSubmit={(FormData)=>{
          // send email and pass to backend
        }}>
          <div>
            <Form className='form'>
              <div className='input'>
                <label>Email Address</label>
                <Field type="email" name="email" className="field-box"/>
              </div>
              <div className='input'>
                <label>Password</label>
                <Field type="password" name="password" className="field-box"/>
              </div>
              <div>
                <Field type="checkbox" name='saveId'/><label>  Remember me for 30 days</label>
              </div>
              
              <button type="submit" className='btn-login'>Log in</button>
            </Form>
          </div>
        </Formik>
      </div>
    </>
  )
}

export default App
