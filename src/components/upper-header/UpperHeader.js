import React from 'react';
import {Navbar, Nav, NavDropdown, Button, Form, FormControl} from 'react-bootstrap'

import logo from '../../img/index.png'

import Login from './Login'
import MoreOptions from './MoreOptions'


function UpperHeader() {
  return (
    <Navbar bg="white" variant="light">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          height="25"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="mr-auto">
        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
          <NavDropdown.Item href="">Popular</NavDropdown.Item>
          <NavDropdown.Item href="">All</NavDropdown.Item>
          <NavDropdown.Item href="">Original content</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Coin</NavDropdown.Item>
          <NavDropdown.Item href="">Premium</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav.Link href="#home">Popular</Nav.Link>
      <Nav.Link href="#home">All</Nav.Link>
      <Nav.Link href="#home">Original content</Nav.Link>
      <Login />
      <MoreOptions />
    </Navbar>
  );
}

export default UpperHeader;

