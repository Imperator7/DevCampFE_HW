import { useState } from 'react'
import { Form, Field, Formik} from 'formik'
import { object, string } from 'yup'
import '../src/App.css'

function App() {
  let loginSchema = object({
    email: string().email().required("Please enter your email address"),
    password: string().min(8).max(15).required("Please enter your password"),
  })
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
        validationSchema={loginSchema}
        onSubmit={(FormData) => {
          // submit to the endpoint
        }}>
            {({ errors, touched }) => (
            <div>
              <Form className='form'>
                <div className='input'>
                  <label>Email Address {touched.email && errors.email && <span style={{color: "red"}}>{errors.email}</span>}</label>
                  <Field type="email" name="email" className="field-box"/>
                </div>
                <div className='input'>
                  <label>Password {touched.password && errors.password && <span style={{color: "red"}}>{errors.password}</span>}</label>
                  <Field type="password" name="password" className="field-box"/>
                </div>
                <div>
                  <Field type="checkbox" name='saveId'/><label>  Remember me for 30 days</label>
                </div>
                
                <button type="submit" className='btn-login'>Log in</button>
              </Form>
            </div>
            )}
            
        </Formik>
      </div>
    </>
  )
}

export default App
