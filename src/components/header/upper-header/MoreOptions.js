import React from 'react';

// import react-bootstrap components
import { NavDropdown, Dropdown } from 'react-bootstrap'

// import css
// import './MoreOptions.css'

// import styled components
import * as Styled from './moreOptionsStyle'


// components
const MoreOptions = () => {
    return (

        <Dropdown alignRight>

            <Styled.DropdownToggle variant=''>
                {/* <Dropdown.Toggle variant="" className='options-button'> */}
                {/* <IoMdPerson className='text-secondary options-icon options-toggle-icon' /> */}
                <Styled.IconPerson />
                {/* </Dropdown.Toggle> */}
            </Styled.DropdownToggle>

            <Styled.DropdownMenu>
            {/* <Dropdown.Menu className='font-size-14'> */}

                <Styled.DropdownHeader>VIEW OPTIONS</Styled.DropdownHeader>
                {/* <Dropdown.Header className='font-size-10 font-weight-600'>VIEW OPTIONS</Dropdown.Header> */}

                <NavDropdown.Item href="">
                    <Styled.IconMoon />
                    {/* <IoIosMoon className='text-secondary mr-2 options-icon' /> */}
                    Night Mode
                </NavDropdown.Item>

                <Styled.DropdownHeader>MORE STUFF</Styled.DropdownHeader>
                {/* <Dropdown.Header className='font-size-10'>MORE STUFF</Dropdown.Header> */}

                <Styled.DropdownItemFlex href="">
                {/* <NavDropdown.Item href="" className='d-flex'> */}
                    <Styled.IconRadioButtonOn />
                    {/* <IoIosRadioButtonOn className='text-secondary mr-2 options-icon' /> */}
                    <div>
                        <span>Reddit Coins</span>
                        <Styled.Para>0 coins</Styled.Para>
                        {/* <p className='mt-1 font-size-12'></p> */}
                    </div>
                {/* </NavDropdown.Item> */}
                </Styled.DropdownItemFlex>

                <NavDropdown.Item href="">
                    <Styled.IconRose />
                    {/* <IoMdRose className='text-secondary mr-2 options-icon' /> */}
                    Reddit Premium
                </NavDropdown.Item>

                <NavDropdown.Item href="">
                    <Styled.IconHelpCircle />
                    {/* <IoMdHelpCircleOutline className='text-secondary mr-2 options-icon' /> */}
                    Help Center
                    <Styled.IconLogOut />
                    {/* <IoMdLogOut className='text-secondary mx-2' /> */}
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item href="">
                    <Styled.IconLogIn />
                    {/* <IoIosLogIn className='text-secondary mr-2 options-icon' /> */}
                    Log In / Sign Up
                </NavDropdown.Item>

            {/* </Dropdown.Menu> */}
            </Styled.DropdownMenu>
        </Dropdown>
    )
}


export default MoreOptions;