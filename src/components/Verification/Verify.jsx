import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import './Verify.css'

const Verify = () => {

    const [isVerified, setIsVerified] = useState(false)
    const [status, setStatus] = useState('')
    const [statusColor, setStatusColor] = useState('');
    const navigate = useNavigate();

    const getUsers = async() =>{
        const response = await fetch('http://localhost:8080/GetUsers');
        const data = await response.json();    
        return data;
    }
    
    const goToLogin = () =>{navigate('/login')}
    const verifyAccount = async() =>{
        const users = await getUsers();
        const currentUser = localStorage.getItem('currentUser');
        const userList = users.find(user => (user.username === currentUser && user.status === true))

        if(userList){
            setTimeout(() => {                
                setStatus('Approved')
                setStatusColor('green');
             }, 1000);
            setTimeout(() => {                
                setIsVerified(true);                
            }, 2000);
        } else {
            setTimeout(() => {                
                setStatus('Rejected');
                setStatusColor('red');                
                setIsVerified(false);                
            }, 1000);
            
            setTimeout(() => {
                goToLogin();
            }, 2000); 
        }
    }

    useEffect(() =>{
        verifyAccount();
    })
    return (
            
        <>
        {
            isVerified ? (<Dashboard/>) : (<main className='Verify'>
                <section className='loadingToApp'>
                    <h2>Verifying your account</h2>
                    <p style={{ color: statusColor }} id='loginStatus'>{status}</p>
                    <div className='loading'></div>
                </section>
            </main>)
        }            
        </>
                        
    )
}

export default Verify