import React from 'react';
import { Nav, NavDropdown, Button, FormControl, Dropdown } from 'react-bootstrap'

import { IoMdPerson } from "react-icons/io"

import './MoreOptions.css'

const MoreOptions = () => {
    return (
        <Dropdown alignRight>
            <Dropdown.Toggle variant="" className='options-button d-flex justify-content-around'>
                <IoMdPerson className='text-secondary mr-3 options-icon'/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Header>VIEW OPTIONS</Dropdown.Header>
                <NavDropdown.Item href="">Night Mode</NavDropdown.Item>
                <Dropdown.Header>MORE STUFF</Dropdown.Header>
                <NavDropdown.Item href="">Reddit Coins</NavDropdown.Item>
                <NavDropdown.Item href="">Reddit Premium</NavDropdown.Item>
                <NavDropdown.Item href="">Help Center</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Log In / Sign Up</NavDropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

    )
}


export default MoreOptions;