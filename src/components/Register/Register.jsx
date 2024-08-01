import React from 'react'
import { useNavigate } from 'react-router-dom'

import pointer from './assets/pointer.svg'
import forgot from './assets/forgotPass.svg'

import './Register.css'

const Register = () => {

  const navigate = useNavigate();
  const goBack = () => { navigate('/')};
  const goToLogin = () => { navigate('/login')};

  const sendEmail = () =>{
    emailjs.sendEmail()
  }

  return (    
    <>
      <main className='mainRegister'>
        <section className='registerInformation'>
          <div className='registerLogo'>
            <p>Logo WebChat</p>
          </div>
          <div className='registerInfo'>
            <h1>Create an account</h1>
            <hr/>
            <div className='registerInputs'>
              <input type="text" placeholder='User' className='registerInput'/>
              <input type="email" placeholder='Email' className='registerInput'/>
              <input type="password" placeholder='Password' className='registerInput'/>
              <input type="password" placeholder='Repeat password' className='registerInput'/>
              <span className='confirmationCode'>
                <input type="password" placeholder='Confirmation code' className='registerInput'/>                
              </span>
              <input type="button" value="Create user" className='registerSubmitButton'/>
            </div>

            <div className='registerGoBack' onClick={goBack}>
                <img src={pointer} alt="" />
                <p>go back to menu</p>
            </div>

          </div>
        </section>
        <section className='RegisterLoginUp'>
            <h1>Have an Account?</h1>
            <p>Click click here to go to login page</p>
            <button className='loginSingUpButton' onClick={goToLogin}>Sing Up!</button>
        </section>

      </main>
    </>
  )
}

export default Register