import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'

import "./LoginSignup.css";

function LoginSignUp() {
    const [action, setAction] = useState("Login");

    return (
        <div className="container">
            <div className='header'>
                <div className="text">
                    {action}
                </div>
                <div className="underline"></div>
            </div>

            <div className="inputs">
                {action === "Sign up" &&
                <div className="input">
                    <FontAwesomeIcon icon={faUser} className='icon' />
                    <input type="text" placeholder='Name' className=''/>
                </div>}

                <div className="input">
                    <FontAwesomeIcon icon={faEnvelope} className='icon' />
                    <input type="email" placeholder='Email' className=''/>
                </div>

                <div className="input">
                    <FontAwesomeIcon icon={faLock} className='icon' />
                    <input type="password" placeholder='Password' className=''/>
                </div>
            </div>

            {action === "Login" && 
            <div className="forgot-password">
                Lost password? <span>Click here!</span>
            </div>}
            <div className='submit-button'>
                <div className='submit full-width'>{action}</div>

            </div>

            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign up")}>
                    Sign Up
                </div>

                <div className={action === "Sign up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>
                    Login
                </div>
            </div>
        </div>
    );
}

export default LoginSignUp;