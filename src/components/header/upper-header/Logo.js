import React from 'react';
import { Navbar } from 'react-bootstrap'
import * as Styled from './logoStyle'

import icon from '../../../img/Reddit_logo_orange.svg'
import text from '../../../img/reddittext.svg'


const Logo = () => {
    return (
        <Styled.NavbarBrand href="/">
            <Styled.ImgLogo alt="logo" src={icon} height="32" />
            <Styled.ImgText alt="logo-text" src={text} height="20" />
        </Styled.NavbarBrand>
    );
}

export default Logo;

