import React from 'react';

import * as Styled from './loginStyle'

// import './Login.css'

const Login = () => {
    return (
        <Styled.DivContainer>
            <Styled.ButtonLogin variant="outline-primary">LOG IN</Styled.ButtonLogin>
            <Styled.ButtonSignUp variant="primary">SIGN UP</Styled.ButtonSignUp>
        </Styled.DivContainer>
    )
}


export default Login;