import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap'

import Logo from './Logo'
import Login from './Login'
import MoreOptions from './MoreOptions'
import SearchBar from './SearchBar'
import ArrowDropDown from './ArrowDropDown'
import Filter from './Filter'

import './UpperHeader.css'


const UpperHeader = () => {
  return (
    <Navbar bg="white" variant="light" className='upper-header'>
      <div className='d-flex flex-grow-1'>
        <Logo />
        <ArrowDropDown />
        <SearchBar />
      </div>
      <div className='d-flex'>
        <Filter />
        <Login />
        <MoreOptions />
      </div>
    </Navbar>
  );
}

export default UpperHeader;

