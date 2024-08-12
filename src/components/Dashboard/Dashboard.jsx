import React from 'react'
import NavBar from '../NavBar/NavBar'

const Profile = () => {

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
    }).then(alert('succefully changed!'))
  }

  return (
    <>
      <NavBar/>
      <main>
        <div>Profile  AAAA</div>
        <button onClick={tets}>Click here to loggout</button>
      </main>
    </>
    
  )
}

export default Profile