import React from 'react'
import Im1L1 from './WebAssets/ImLine1.jpg'
import { useNavigate } from 'react-router-dom'

import './WebPage.css'
import './Animations/Animation1.css'
import './Animations/Animation2.css'
import './Animations/Animation3.css'

const WebPage = () => {

    const navigate = useNavigate();
    const goToLogin = () =>{navigate('/login')}
    const goToRegister = () =>{navigate('/register')}

  return (
   <>
   <nav className='MainNav'>

        <div className='WebLogo'>
            <p>Logo WebChat</p>
        </div>

        <li className='NavList'>     
            <a href="">
                <ol>Product</ol>
            </a>       
            <a href="">
                <ol>Comunity</ol>
            </a>
            <a href="">
                <ol>Blog</ol>
            </a>
        </li>

        <div className='Buttons'>
            <button className='LoginButton' onClick={goToLogin}>Login</button>
            <button className='RegisterButton' onClick={goToRegister}>Register</button>
        </div>
   </nav>

    <main className='MainWebPage'>
        <article className='WebPageArticle'>
            <section className='WebIntro'>
                <div className='ClassS'>
                    <h1>Welcome to a new system of chats I'm working on</h1>
                    <p>Let's see what else we add here</p>
                </div>
            </section>
            <section className='WebIntroImg'>
            <div className='ImgTrack'>
                <div className='ImgTrackInner BunchOfImages1'>
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                </div>
            </div>
            <div className='ImgTrack1'>
                <div className='ImgTrackInner1 BunchOfImages2'>
                    
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                </div>
            </div>
            <div className='ImgTrack2'>
                <div className='ImgTrackInner2 BunchOfImages3'>
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />

                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                    <img src={Im1L1} alt="" />
                </div>
            </div>
        </section>
        </article>
        <article className='WebPageArticle2'>
           <section className='TriangleDivision'>

           </section>
        </article>
    </main>
   </>
  )
}

export default WebPage