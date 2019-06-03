import React from 'react';
import {Navbar} from 'react-bootstrap'

import View from './View'
import Sort from './Sort'
import Location from './Location'

import './LowerHeader.css'


function LowerHeader() {
  return (
    <Navbar className='container lower-header'>
      <View />
      <Sort />
      <Location />
    </Navbar>
  );
}

export default LowerHeader;
