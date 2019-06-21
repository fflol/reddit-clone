import React from 'react';
import { Navbar } from 'react-bootstrap'

import icon from '../../../img/Reddit_logo_orange.svg'
import text from '../../../img/reddittext.svg'


const Logo = () => {
    return (
        <Navbar.Brand href="/" className='mr-0'>
            <img
                alt=""
                src={icon}
                height="32"
                className="d-inline-block align-middle"
            />
            <img
                alt=""
                src={text}
                height="20"
                className="align-middle ml-2 responsive-items"
            />
        </Navbar.Brand>
    );
}

export default Logo;

