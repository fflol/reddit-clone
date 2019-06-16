import React from 'react';

// import react-bootstrap components
import { Button } from 'react-bootstrap'

// import componets
import Feeds from './Feeds';
import SidePlaceholder from './SidePlaceholder'
import Premium from './Premium'
import TrendingCommunities from './TrendingCommunities'
import Footer from './Footer'

// import css
import './SideMenu.css'


// component
const SideMenu = () => {

  const handleClick = () => {
    document.documentElement.scrollTop = 0
  }

  return (
    <aside className='flex-column side-menu-container'>
      <Feeds />
      <SidePlaceholder />
      <Premium />
      <TrendingCommunities />
      <SidePlaceholder />
      <Footer />
      <Button onClick={handleClick} className='back-to-top'>back to top</Button>
    </aside>
  );
}

export default SideMenu;
