import React from 'react';

// import react-bootstrap components
import { Navbar } from 'react-bootstrap'

// import components
import Logo from './Logo'
import Login from './Login'
import MoreOptions from './MoreOptions'
import SearchBar from './SearchBar'
import ArrowDropDown from './ArrowDropDown'
import Filter from './Filter'

// import css
import './UpperHeader.css'


// component
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

