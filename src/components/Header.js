import React from 'react';

import UpperHeader from './upper-header/UpperHeader';
import LowerHeader from './lower-header/LowerHeader';


function Header() {
  return (
    <header className='d-flex flex-column bg-white mb-1'>
        <UpperHeader />
        <LowerHeader />
    </header>
  );
}

export default Header;
