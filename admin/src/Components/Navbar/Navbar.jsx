import React from 'react'
import './Navbar.scss'
import navlogo from '../../assets/nav-logo.svg'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="logo" className='nav-logo'/>
        <img src={navProfile} alt="profile" className='nav-profile'/>
    </div>
  )
}

export default Navbar