import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap'

import icon from '../../img/Reddit_logo_orange.svg'
import text from '../../img/reddittext.svg'


const Logo = () => {
    return (
        <Navbar.Brand href="/" className='mr-0'>
            <img
                alt=""
                src={icon}
                height="32"
                className="d-inline-block align-middle pr-2"
            />
            <img
                alt=""
                src={text}
                height="20"
                className="d-inline-block align-middle"
            />
        </Navbar.Brand>
    );
}

export default Logo;

