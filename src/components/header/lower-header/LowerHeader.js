import React from 'react';

import View from './View'
import Sort from './Sort'
import Location from './Location'

import { SideMenuContainer } from '../../../styles/sharedComponents'

import * as Styled from './lowerHeaderStyle'
// import './LowerHeader.css'


function LowerHeader() {
  return (
    <Styled.NavBar>
        <Styled.DivContainer>
        <View />
        <Sort />
        <Location />
        </Styled.DivContainer>
      <SideMenuContainer />
    </Styled.NavBar>
  );
}

export default LowerHeader;
