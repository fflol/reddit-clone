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
// import './UpperHeader.css'

// import styled components
import { UpperHeaderNavbar, FlexGrowContainer } from './upperHeaderStyle'
import { HorizontalContainer } from '../../../styles/sharedComponents'


// component
const UpperHeader = () => {
  return (
    <UpperHeaderNavbar>
      {/* <Navbar bg="white" variant="light" className='upper-header'> */}
      {/* <div className='d-flex flex-grow-1'> */}
      <FlexGrowContainer>
        <Logo />
        <ArrowDropDown />
        <SearchBar />
      </FlexGrowContainer>
      {/* </div> */}
      {/* <div className='d-flex'> */}
      <HorizontalContainer>
        <Filter />
        <Login />
        <MoreOptions />
      </HorizontalContainer>
      {/* </div> */}
      {/* </Navbar> */}
    </UpperHeaderNavbar>
  )
}

export default UpperHeader;

