import React from 'react';
import { Nav, NavDropdown, Button, Form, FormControl, Dropdown } from 'react-bootstrap'

import { CustomToggle, CustomMenu } from '../customDropdownComponents'
import { IoMdTrendingUp, IoIosPodium, IoIosCreate, IoIosRadioButtonOn, IoMdRose } from "react-icons/io"

import './ArrowDropDown.css'


const ArrowDropDown = () => {
    return (
        <Dropdown className='dropdown-container'>
            <Dropdown.Toggle variant='' className='drop-down dropdown-toggle-custom d-flex justify-content-between'>
                <span>
                    <IoMdTrendingUp className='text-primary pr-1 dropdown-icons' />
                    Popular
                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className='drop-down' as={CustomMenu}>
                <Dropdown.Header className='drop-header'>REDDIT FEEDS</Dropdown.Header>
                <NavDropdown.Item href="">
                    <IoMdTrendingUp className='text-primary pr-1 dropdown-icons' />
                    Popular
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                    <IoIosPodium className='text-primary pr-1 dropdown-icons' />
                    All
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                    <IoIosCreate className='text-primary pr-1 dropdown-icons' />
                    Original content
                </NavDropdown.Item>
                <Dropdown.Header className='drop-header'>OTHER</Dropdown.Header>
                <NavDropdown.Item href="">
                    <IoIosRadioButtonOn className='text-warning pr-1 dropdown-icons' />
                    Coin
                </NavDropdown.Item>
                <NavDropdown.Item href="">
                    <IoMdRose className='text-danger pr-1 dropdown-icons' />
                    Premium
                </NavDropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default ArrowDropDown