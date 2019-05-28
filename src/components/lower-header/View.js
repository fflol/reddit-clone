import React from 'react'

import { Nav } from 'react-bootstrap'


const View = () => {
    return (
      <Nav>
        View
        <Nav.Link href="#home">Card</Nav.Link>
        <Nav.Link href="#home">Classic</Nav.Link>
        <Nav.Link href="#home">Compact</Nav.Link>
      </Nav>
    );
  }
  
export default View  