import React from 'react';
import {Navbar} from 'react-bootstrap'

import View from './View'
import Sort from './Sort'
import Location from './Location'


function LowerHeader() {
  return (
    <Navbar bg="white" variant="light">
      <View />
      <Sort />
      <Location />
    </Navbar>
  );
}

export default LowerHeader;
