import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState , useEffect} from 'react'

import pointer from './assets/pointer.svg'
import forgot from './assets/forgotPass.svg'

import './Register.css'

const Register = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [ip, setIp] = useState(location.hostname);  
  const [created, setCreated] = useState(false);
  const [blank, setBlank] = useState(false);

  const navigate = useNavigate();
  const goBack = () => { navigate('/')};
  const goToLogin = () => { navigate('/login')};


  const sendEmail = () =>{
    emailjs.sendEmail()
  }

  const getIP = async() =>{
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    setIp(data.ip);
  }

  const CheckAllFilled = () =>{
    if(username && email && password && confirmPassword) return true;    
    else return false;
  }

  const CheckPasswordConfirmation = () =>{
    if(password === confirmPassword) return true;
    else return false;
  }

  const createNewUser = async() =>{

    const User = {
      username: username,
      email: email,
      password: password,
      ip: ip
    }
    
    if(CheckPasswordConfirmation()){
      try{
        const response = await fetch('http://localhost:8080/AddUser',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(User),
        })
      } catch{
        alert('Server Error')
      }

      setCreated(true);
      setTimeout(() => {
        setCreated(false);
      }, 3000);

      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIp('');
    } else{
      setBlank(true);
      
      setTimeout(() => {
        setBlank(false);
      }, 3000);
    }

  }
    
  const sendNewUserToDB = (e) =>{
    e.preventDefault();
    createNewUser();
  }
  
  useEffect(() =>{
    getIP();
    console.log(ip);
  }, [])

  return (    
    <>
      <main className='mainRegister'>
        <section className='registerInformation'>
          <div className='registerLogo'>
            <p>Logo WebChat</p>
          </div>          
          <div className='registerInfo'>
            {
              created&&(
                <span className='AccountCreated'>Account succesfully created</span>
              )              
            }
            {
              blank&&(
                <span className='BlankError'>Please fill all the inputs</span>
              )
            }
            <h1>Create an account</h1>
            <hr/>
            <div className='registerInputs'>
            
              <input type="text" placeholder='User' className='registerInput' value={username} onChange={(e) => setUsername(e.target.value)}/>
              <input type="email" placeholder='Email' className='registerInput' value={email} onChange={(e) =>setEmail(e.target.value)}/>
              <input type="password" placeholder='Password' className='registerInput' value={password} onChange={(e) => setPassword(e.target.value)}/>
              <input type="password" placeholder='Repeat password' className='registerInput' value={confirmPassword} onChange={(e) =>setConfirmPassword(e.target.value)}/>
              <span className='confirmationCode'>
                <input type="password" placeholder='Confirmation code' className='registerInput'/>                
              </span>
              <input type="button" onClick={sendNewUserToDB} value="Create user" className='registerSubmitButton' id='SubmitNewUser'/>
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
            <button className='loginSingUpButton' onClick={goToLogin}>Log in!</button>
        </section>

      </main>
    </>
  )
}

export default Register