import React from 'react'
import './Footer.scss'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footer-logo" />
            <p id='footer'>RETRO VIDEO</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href="https://www.instagram.com/">
                <img src={instagram_icon} alt="instagram" />
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="https://www.pinterest.com/">
                    <img src={pinterest_icon} alt="pinterest" />
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="https://web.whatsapp.com/">
                    <img src={whatsapp_icon} alt="whatsapp" />
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright &copy; 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer