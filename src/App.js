import React from 'react'
import { Provider } from 'react-redux'

import Header from './components/Header'
import Posts from './components/posts/Posts'
import SideMenu from './components/side-menu/SideMenu'

import { store } from './store/store'

import './responsive.css'
import './App.css'


function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className='main-container main-responsive-container'>
        <Posts />
        <SideMenu />
      </div>
    </Provider>
  );
}

export default App;
