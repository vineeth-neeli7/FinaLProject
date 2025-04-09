import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
   
    const navStyle = {
        color : 'black'
    }
    return ( 

        <nav className="main">
            <ul>
                <Link style={navStyle} to='/SignUp'>
                <li>Sign Up</li>
                </Link>
                <Link style={navStyle} to='/ForgotPassword'>
                <li>Forgot Password</li>
                </Link>
                <Link style={navStyle} to='/AdminHomePage'>
                <li>AdminHomePage</li>
                </Link>
                <Link style={navStyle} to='/Login'>
                <li>Login</li> 
                </Link>
                
            </ul>
        </nav>
    )
    
}

export default Nav
