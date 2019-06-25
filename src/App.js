import React from 'react'
import { Provider } from 'react-redux'

import Header from './components/header/Header'
import Posts from './components/posts/Posts'
import SideMenu from './components/side-menu/SideMenu'

import { store } from './store/store'

import './responsive.css'
// import './App.css'

// import styled-components
import { GlobalStyle } from './styles/reset'
import { HorizontalContainer } from './styles/sharedComponents'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <HorizontalContainer centerH margin='110px 0 0 0'>
        {/* <div className='main-container main-responsive-container'> */}
        <Posts />
        <SideMenu />
      </HorizontalContainer>
      {/* </div> */}
    </Provider>
  );
}

export default App;
