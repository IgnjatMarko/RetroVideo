import React, { useState } from 'react'
import './Navbar.scss'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="logo" />
            <p>Retro Video Club</p>
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}>Shop{menu==="shop"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("shop2")}}>Shop 2{menu==="shop2"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("shop3")}}>Shop 3{menu==="shop3"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("shop4")}}>Shop 4{menu==="shop4"?<hr />:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
            <button>Login</button>
            <img src={cart_icon} alt="cart" />
            <div className="nav-cart-count">
                0
            </div>
        </div>
    </div>
  )
}

export default Navbar;
