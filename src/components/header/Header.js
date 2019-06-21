import React from 'react';

import UpperHeader from './upper-header/UpperHeader';
import LowerHeader from './lower-header/LowerHeader';

// import './Header.css'

import { HeaderContainer } from './headerStyle'


function Header() {
  return (
    <HeaderContainer>
      <UpperHeader />
      <LowerHeader />
    </HeaderContainer>
  );
}

export default Header;
