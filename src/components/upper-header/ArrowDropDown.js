import React from 'react';
import { Nav, NavDropdown, Button, Form, FormControl, Dropdown } from 'react-bootstrap'

import { CustomToggle, CustomMenu } from '../customComponents'
import { IoMdTrendingUp, IoIosPodium, IoIosCreate, IoIosRadioButtonOn, IoMdRose } from "react-icons/io"

import './ArrowDropDown.css'


const ArrowDropDown = () => {
    return (
        <Dropdown className='dropdown-container'>

            <Dropdown.Toggle variant='' className=' dropdown-toggle-custom align-items-center p-0 d-flex justify-content-between'>
                <span>
                    <IoMdTrendingUp className='text-primary pr-1 dropdown-icons' />
                    <span className='responsive-items'>Popular</span>                    
                </span>
            </Dropdown.Toggle>

            <Dropdown.Menu className='font-size-14 w-100' as={CustomMenu}>

                <Dropdown.Header className='font-size-10'>REDDIT FEEDS</Dropdown.Header>

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

                <Dropdown.Header className='font-size-10'>OTHER</Dropdown.Header>

                <NavDropdown.Item href="">
                    <IoIosRadioButtonOn className='text-warning pr-1 dropdown-icons' />
                    Coin
                </NavDropdown.Item>

                <NavDropdown.Item href="">
                    <IoMdRose className='pr-1 premium-icon' />
                    Premium
                </NavDropdown.Item>

            </Dropdown.Menu>

        </Dropdown>
    )
}

export default ArrowDropDown