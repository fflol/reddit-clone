import React from 'react';

import * as Styled from './loginStyle'

// import './Login.css'

const Login = () => {
    return (
        <Styled.Container>
            <Styled.ButtonLogin variant="outline-primary">LOG IN</Styled.ButtonLogin>
            <Styled.ButtonSignUp variant="primary">SIGN UP</Styled.ButtonSignUp>
        </Styled.Container>
    )
}


export default Login;