import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <div className='logo-container'>
            Logo
            {/* insert icon here
            insert Link here */}
        </div>
        <div className='icon-links'>
            <div className='shortlist-container'>
                Shortlist
                {/* insert icon here
                insert Link here */}
            </div>
            <div className='contact-container'>
                Contact Us
                {/* insert icon here
                insert Link here */}
            </div>
        </div>  
    </div>
  )
}

export default Header