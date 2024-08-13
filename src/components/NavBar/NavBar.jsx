import React from 'react'
import { useNavigate } from 'react-router-dom'

import logo from './assets/WebLogo.svg'
import profile from './assets/profile.svg'
import feed from './assets/feed.svg'
import people from './assets/friend.svg'
import settings from './assets/settings.svg'
import logout from './assets/log-out.svg'
import './NavBar.css'
const NavBar = () => {

  const navigate = useNavigate();
  const goToMenu = () => navigate('/');

  const tets = async() =>{
    const loggedUser = {
      username: 'santi',
      password: '123',
      email: 'pspanchig@gmail.com',
      status: false,
      ip: '2800:bf0:82:11a0:48d4:9256:1eb3:7bd6'
    }
    fetch(`http://localhost:8080/updateUser/1`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
        body: JSON.stringify(loggedUser)
    }).then(goToMenu())
  }


  return (
    <nav className='NavBar'>
        <ul className='NavBarList'>
            <div>
                <img id='igms' src={logo} alt="" />
                <h1 id='logoNavbar'>Webchat</h1>
            </div>
            <li className='NavBarItem' ><img src={profile} alt="" /> <p>Profile</p></li>
            <li className='NavBarItem'><img src={feed} alt="" /><p>Feed</p></li>            
            <li className='NavBarItem'><img src={people} alt="" /><p>People</p></li>
            <li className='NavBarItem'><img src={settings} alt="" /><p>Settings</p></li>
            <li className='NavBarItem' id='logout' onClick={tets}><img src={logout} alt="" /><p>Log Out</p> </li>
        </ul>
    </nav>
  )
}

export default NavBar