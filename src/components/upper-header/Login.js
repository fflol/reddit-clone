import React from 'react';

import { Button } from 'react-bootstrap'

import './Login.css'

const Login = () => {
    return (
        <div className='d-flex login-container'>
            <Button variant="outline-primary" className='mr-3 login-button'>LOG IN</Button>
            <Button variant="primary" className='login-button'>SIGN UP</Button>
        </div>
    )
}



export default Login;