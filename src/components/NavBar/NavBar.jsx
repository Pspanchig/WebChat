import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav className='NavBar'>
        <ul className='NavBarList'>
            <div>
                <h1>Webchat</h1>
                <img src="" alt="WebChatLogo" />
            </div>
            <li className='NavBarItem'>Profile</li>
            <li className='NavBarItem'>Feed</li>
            <li className='NavBarItem'>People</li>
            <li className='NavBarItem'>Configurations</li>
            <li className='NavBarItem'>Log Out</li>
        </ul>
    </nav>
  )
}

export default NavBar