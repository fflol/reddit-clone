import React from 'react'

import { NavDropdown, Nav } from 'react-bootstrap'


const Sort = () => {
  return (
    <Nav>
      Sort
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">Hot</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">New</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Controversial</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Top</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="">Rising</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default Sort  