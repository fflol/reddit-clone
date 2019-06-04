import React from 'react';
import {Navbar} from 'react-bootstrap'

import View from './View'
import Sort from './Sort'
import Location from './Location'

import './LowerHeader.css'


function LowerHeader() {
  return (
    <Navbar className='d-flex justify-content-center main-responsive-container'>
      <div className='lower-header-container'>
        <View />
        <Sort />
        <Location />
      </div>
      <div className='side-menu-container'></div>
    </Navbar>
  );
}

export default LowerHeader;
