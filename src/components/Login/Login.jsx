import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState , useEffect} from 'react'

import pointer from './assets/pointer.svg'
import close from './assets/close.svg'
import forgot from './assets/forgotPass.svg'

import './login.css'

const Login = () => {

  const [forgotPass, setForgotPass] = useState(false)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const [loginFailed, setLoginFailed] = useState(false);
  const [blanklogin, setBlanklogin] = useState(false);

  const navigate = useNavigate();
  const goBack = () => { navigate('/')};
  const goToRegister = () => { navigate('/register')};
  const goToApp = () => {navigate('/dashboard')}

  const displayForgotPassword = () =>{
    setForgotPass(!forgotPass);
  } 
  
  const getUsers = async() =>{
    const response = await fetch('http://localhost:8080/GetUsers');
    const data = await response.json();    
    return data;
  }

  const CheckLogin = async() =>{
    const listOfUsers = await getUsers();
    const checkUsers = listOfUsers.find(user => (user.username === username.toLowerCase() && user.password === password) || (user.email === username && user.password === password));

    if(checkUsers){
            
      const userID = checkUsers.id;      
      const loggedUser = {
        username: checkUsers.username,
        password: checkUsers.password,
        email: checkUsers.email,
        status: true,
        ip: checkUsers.ip
      }
      fetch(`http://localhost:8080/updateUser/${userID}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
          body: JSON.stringify(loggedUser)
      }).then(goToApp())
      .catch(error => console.error('Error:', error));
      localStorage.setItem("currentUser", username.toLowerCase());
    }
    else{      
      const isEmpty = !!(!username && !password);
      
      if(isEmpty){
        setBlanklogin(true);
        setTimeout(() => {
          setBlanklogin(false);
        }, 3000);
      } else{
        setLoginFailed(true);
        setTimeout(() => {
          setLoginFailed(false);
        }, 3000);
      }
      
    }
  }

  useEffect(() =>{
    getUsers();
  },[])


  return (    
    <>
      <main className='mainLogin'>
        {
          forgotPass == true &&(
            <section className='forgotPassblur' id='forgotPassblur'>
              <span className='forgotPassPopUp'>
                <h2>Forgot Password?</h2>
                  <p>Enter your email address and we will send you a link to reset your password.</p>
                <div className='submitMissingPass'>
                  <input type="text" placeholder='email' className='passMissingInput'/>
                  <button>Submit</button>              
                </div>            
                <button onClick={displayForgotPassword} className='closeMissingPopUp'><img src={close} alt="" /></button>
              </span>
            </section>
          )
        }
        <section className='loginInformation'>
          <div className='loginLogo'>
            <p>Logo WebChat</p>
          </div>
          <div className='loginInfo'>
          <div className='Warnings'>
            {
              loginFailed&&(
                <span className='BlankError'>Username or passwor are incorrect</span>
              )
            }
            {
              blanklogin&&(
                <span className='BlankError'>Please fill the inputs</span>
              )
            }
          </div>

            <h1>Login to your Account!</h1>
            <p>if you do not have a user create one!</p>
            <hr/>
            <div className='loginInputs'>
              <input type="text" placeholder='User or email' className='loginInput' value={username} onChange={(e) => setUsername(e.target.value)}/>
              <input type="password" placeholder='Password' className='loginInput' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input type="button" value="Submit" className='loginSubmitButton' onClick={CheckLogin}/>
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