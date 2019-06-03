import React from 'react';
import { Nav, NavDropdown, Button, FormControl, Dropdown } from 'react-bootstrap'

import { IoMdPerson, IoIosMoon, IoIosRadioButtonOn, IoMdRose, IoMdHelpCircleOutline, IoMdLogOut, IoIosLogIn } from "react-icons/io"

import './MoreOptions.css'
// .font-size-14 .font-size-10 .font-weight-600 .btn are in ArrowDropDown.css

const MoreOptions = () => {
    return (
        <Dropdown alignRight>

            <Dropdown.Toggle variant="" className='options-button font-size-14 d-flex justify-content-around'>
                <IoMdPerson className='text-secondary mr-2 options-icon options-toggle-icon' />
            </Dropdown.Toggle>

            <Dropdown.Menu className='font-size-14'>

                <Dropdown.Header className='font-size-10 font-weight-600'>VIEW OPTIONS</Dropdown.Header>

                <NavDropdown.Item href="">
                    <IoIosMoon className='text-secondary mr-2 options-icon' />
                    Night Mode
                </NavDropdown.Item>

                <Dropdown.Header className='font-size-10'>MORE STUFF</Dropdown.Header>

                <NavDropdown.Item href="" className='d-flex'>
                    <IoIosRadioButtonOn className='text-secondary mr-2 options-icon' />
                    <div>
                        <span>Reddit Coins</span>
                        <p className='mt-1 font-size-12'>0 coins</p>
                    </div>
                </NavDropdown.Item>

                <NavDropdown.Item href="">
                    <IoMdRose className='text-secondary mr-2 options-icon' />
                    Reddit Premium
                </NavDropdown.Item>

                <NavDropdown.Item href="">
                    <IoMdHelpCircleOutline className='text-secondary mr-2 options-icon' />
                    Help Center
                    <IoMdLogOut className='text-secondary mx-2' />
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="">
                    <IoIosLogIn className='text-secondary mr-2 options-icon' />
                    Log In / Sign Up
                </NavDropdown.Item>
                
            </Dropdown.Menu>
        </Dropdown>
    )
}


export default MoreOptions;