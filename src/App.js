import React, { Fragment } from 'react';
import './App.css';

import Header from './components/Header'
import Posts from './components/Posts'
import SideMenu from './components/SideMenu'

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
