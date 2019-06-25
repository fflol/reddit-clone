import React from 'react';

// import componets
import Feeds from './Feeds';
import SidePlaceholder from './SidePlaceholder'
import Premium from './Premium'
import TrendingCommunities from './TrendingCommunities'
import Footer from './Footer'

import * as Styled from './sideMenuStyle'



// component
const SideMenu = () => {

  const handleClick = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <Styled.Aside>
      <Feeds />
      <SidePlaceholder />
      <Premium />
      <TrendingCommunities />
      <SidePlaceholder />
      <Footer />
      <Styled.ButtonToTop onClick={handleClick}>back to top</Styled.ButtonToTop>
    </Styled.Aside>
  );
}

export default SideMenu;
