import React from 'react';

import { Button } from 'react-bootstrap'

import './Login.css'

const Login = () => {
    return (
        <div className='login-container responsive-sign-in'>
            <Button variant="outline-primary" className='mr-3 login-button large-screen-button'>LOG IN</Button>
            <Button variant="primary" className='login-button large-screen-button'>SIGN UP</Button>
        </div>
    )
}



export default Login;