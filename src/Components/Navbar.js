import React from 'react'
import '../Styles/Nav-style.css';
export default function Navbar() {
    return (
        <div className='nav3'>
            <span className='nav-title'>PORTFOLIO</span>
            <ul className='nav-ul'>
                <li><a className='active' href="/">HOME</a></li>
                <li><a className='active' href="/about">ABOUT</a></li>
                <li><a className='active' href="/projects">PROJECTS</a></li>
                <li><a className='active' href="/achievements">ACHIEVEMENTS</a></li>
                <li><a className='active' href="/contact">CONTACT</a></li>
            </ul>
        </div>
    )
}
