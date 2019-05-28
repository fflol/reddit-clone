import React from 'react';

import { Nav, NavDropdown, Button, FormControl } from 'react-bootstrap'


const MoreOptions = () => {
    return (
        <Nav className="mr-auto">
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="">Night Mode</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Reddit Coins</NavDropdown.Item>
                <NavDropdown.Item href="">Reddit Premium</NavDropdown.Item>
                <NavDropdown.Item href="">Help Center</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Log In / Sign Up</NavDropdown.Item>
            </NavDropdown>
        </Nav>
    )
}



export default MoreOptions;
