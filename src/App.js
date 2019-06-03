import React, { Fragment } from 'react';
import './App.css';

import Header from './components/Header'
import Posts from './components/posts/Posts'
import SideMenu from './components/side-menu/SideMenu'

function App() {
  return (
    <Fragment>
      <Header />
      <div className='d-flex justify-content-center'>
        <Posts />
        <SideMenu />
      </div>
    </Fragment>
  );
}

export default App;
