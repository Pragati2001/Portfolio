import React from 'react'
import '../Styles/Contact_style.css';
import contact from '../Images/contact2.png';
import insta from '../Images/insta.jpg';
import ln from '../Images/ln.png';
import git from '../Images/git.jpg';
import fb from '../Images/fb.png';
export default function Contact() {
    return (
        <div className='contact'>
            <div className='contact-img'>
                <img src={contact}></img>
            </div>
            <div className='contact-content'>
                <a href="https://github.com/Pragati2001" target="_blank" rel="noreferrer"><img src={git} className='icon1'></img></a>
                <a href="https://www.instagram.com/pragati.kabra/" target="_blank" rel="noreferrer"><img src={insta} className='icon1'></img></a>
                <a href="https://www.linkedin.com/in/pragati-kabra-83b966192/" target="_blank" rel="noreferrer"><img src={ln} className='icon1'></img></a>
                <a href="https://www.facebook.com/pragati.kabra" target="_blank" rel="noreferrer"><img src={fb} className='icon1'></img></a>
            </div>
        </div>
    )
}
