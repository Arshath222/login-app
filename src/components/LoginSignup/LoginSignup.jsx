import React, { useState } from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/user.svg';
import email_icon from '../Assets/email.svg';
import password_icon from '../Assets/password.svg';
import phone_icon from '../Assets/phone.svg';

 const LoginSignup = () => {

const[action,setAction] = useState("Login");

  return (
    <div className='container'>
         <div className='header'>
         <div className='text'>{action}</div>
         <div className='underline'></div>      
    </div>
    <div className='inputs'>
      {action === "Login" ? <div></div>:<div className='input'>
    <img className='icon_size' src={user_icon} alt='' />
    <input type='text' placeholder='Name'/>
    </div> }
    
    <div className='input'>
    <img className='icon_size' src={email_icon} alt='' />

    <input type='email' placeholder='Email Id' />
    </div>
    {action === "Login"?<div></div>:<div className='input'>
    <img className='icon_size' src={phone_icon} alt='' />

    <input type='phone' placeholder='Phone No' />
    </div>}
    
    <div className='input'>
    <img className='icon_size' src={password_icon} alt='' />
    <input type='password' placeholder='Password' />
    </div>
    </div>
    {action === "Sign Up" ? <div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
    
    <div className='submit-container'>
        <div className={action === "Login" ? "submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action === "Sign Up" ?"submit gray":"submit" } onClick={()=>{setAction("Login")}}>Login</div>
    </div>
    </div>
    
  )
}
export default LoginSignup