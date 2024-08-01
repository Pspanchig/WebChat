import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import pointer from './assets/pointer.svg'
import forgot from './assets/forgotPass.svg'

import './login.css'

const Login = () => {

  const [forgotPass, setForgotPass] = useState(false)
  const navigate = useNavigate();
  const goBack = () => { navigate('/')};
  const goToRegister = () => { navigate('/register')};

  const displayForgotPassword = () =>{
    setForgotPass(!forgotPass);
  } 
  

  return (    
    <>
      <main className='mainLogin'>
        {
          forgotPass == true &&(
            <section className='forgotPassblur' id='forgotPassblur'>
              <span className='forgotPassPopUp'>
                <button onClick={displayForgotPassword}>Cerrar</button>
              </span>
            </section>
          )
        }
        <section className='loginInformation'>
          <div className='loginLogo'>
            <p>Logo WebChat</p>
          </div>
          <div className='loginInfo'>
            <h1>Login to your Account!</h1>
            <p>if you do not have a user create one!</p>
            <hr/>
            <div className='loginInputs'>
              <input type="text" placeholder='User' className='loginInput'/>
              <input type="password" placeholder='Password' className='loginInput'/>
              <input type="button" value="Submit" className='loginSubmitButton'/>
            </div>

            <div className='loginGoBack' onClick={goBack}>
                <img src={pointer} alt="" />
                <p>go back to menu</p>
            </div>

          </div>
        </section>
        <section className='loginSignUp'>
            <h1>New Here?</h1>
            <p>create a new account and find many people to talk to</p>
            <button onClick={goToRegister} className='loginSingUpButton'>Sing Up!</button>

            <div className='forgotPass' onClick={displayForgotPassword}>
              <img src={forgot} alt="" />
              <p id='forgPass'>Or did you forgot your Password?</p>
            </div>
        </section>

      </main>
    </>
  )
}

export default Login