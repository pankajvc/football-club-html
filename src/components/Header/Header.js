import React from 'react'

import Logo from "./../../branding-logo.svg"
import './header.css'

export default function Header() {
  return (
    <header className='header-root position-fixed'>     
        <nav className='main-header'>
            <a href='/'>Home</a>
            <a href='/'>About Us</a>
            <a href='/'>Blog</a>
            <a href='/' className='me-0'>Our Gallery</a>
            <a href='/home' className='logo'>
              <img src={Logo} alt='Logo' />
            </a>
            <a href='/'>Team & Player</a>
            <a href='/'>League Table</a>
            <a href='/'>News</a>
            <a href='/'>Contact</a>
        </nav>
    </header>
  )
}
