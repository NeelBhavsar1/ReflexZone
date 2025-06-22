import React, { useState } from 'react'
import '../index.css'
import userimage from '../assets/user.png'
import passwordimage from '../assets/password.png'
import emailimage from '../assets/email.png'

const Signin = () => {

    const [decider, setDecider] = useState("Sign Up")



  return (
    <div className='signin-container'>
        <div className="header">
            <div className="text">{decider}</div>
        </div>
        <div className="inputs">
            {decider === "Login" ? <div></div> : (
                <div className="input">
                <img src={userimage} alt="user image icon" />
                <input type="text" placeholder='Name'/>
            </div>
            )}
            
            <div className="input">
                <img src={emailimage} alt="email image icon" />
                <input type="email" placeholder='Email' />
            </div>
            <div className="input">
                <img src={passwordimage} alt="password image icon" />
                <input type="password" placeholder='Password' />
            </div>
        </div>
        <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
        <div className="submit-container">
            <div className={decider === "Login" ? "submit darkify" : "submit"} onClick={() => {setDecider("Sign Up")}}>Sign Up</div>
            <div className={decider === "Sign Up" ? "submit darkify" : "submit"} onClick={() => {setDecider("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Signin