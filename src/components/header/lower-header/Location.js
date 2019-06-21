import React from 'react'

import { Dropdown, NavDropdown } from 'react-bootstrap'

import './Location.css'


const Location = () => {
  return (
    <div className='location-container'>

      <Dropdown>

        <Dropdown.Toggle variant="" className='sort-toggle d-flex align-items-center justify-content-around'>
          <span className='sort-toggle-title'>New Zealand</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className='font-size-14'>
          <NavDropdown.Item href="">
            New Zealand
          </NavDropdown.Item>
        </Dropdown.Menu>

      </Dropdown>

    </div>
  );
}

export default Location  