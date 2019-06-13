import React from 'react';

import UpperHeader from './upper-header/UpperHeader';
import LowerHeader from './lower-header/LowerHeader';

import './Header.css'


function Header() {
  return (
    <header className='header-container'>
        <UpperHeader />
        <LowerHeader />
    </header>
  );
}

export default Header;
