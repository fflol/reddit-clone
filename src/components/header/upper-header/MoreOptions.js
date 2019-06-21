import React from 'react';

// import react-bootstrap components
import { NavDropdown, Dropdown } from 'react-bootstrap'

// import icons
import {
    IoMdPerson,
    IoIosMoon,
    IoIosRadioButtonOn,
    IoMdRose,
    IoMdHelpCircleOutline,
    IoMdLogOut,
    IoIosLogIn
} from "react-icons/io"

// import css
import './MoreOptions.css'

// import styled components
import { moreOptionsDropdownToggle } from './moreOptionsStyle'


// components
const MoreOptions = () => {
    return (
        <Dropdown alignRight>

            {/* <moreOptionsDropdownToggle> */}
            <Dropdown.Toggle variant="" className='options-button'>
                <IoMdPerson className='text-secondary options-icon options-toggle-icon' />
            </Dropdown.Toggle>
            {/* </moreOptionsDropdownToggle> */}

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