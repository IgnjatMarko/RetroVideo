import React, { useState } from 'react'
import Swal from 'sweetalert2';
import './NewsLetter.scss'

function NewsLetter() {
  const [emailAddress, setEmailAddress] = useState("")
  const handleMessage = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailAddress)) {
      Swal.fire('Oops...', 'Please enter a valid email address', 'error');
      return;
    }
    Swal.fire("Thanks for subscribing!")
  }

  const handleEmailChange = (e) => {
    setEmailAddress(e.target.value);
  }
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div>
            <input type="email" value={emailAddress} onChange={handleEmailChange} placeholder='Your Email Address' />
            <button onClick={handleMessage}>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter