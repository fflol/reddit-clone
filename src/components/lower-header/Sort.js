import React from 'react'

import { NavDropdown, Nav, Dropdown } from 'react-bootstrap'

import { IoIosBonfire, IoIosStar, IoIosThunderstorm, IoIosPodium, IoMdTrendingUp, } from "react-icons/io"

import './Sort.css'



const Sort = () => {
  return (
    <div className='d-flex'>
      <span className='sort-title'>SORT</span>

      <Dropdown>
        <Dropdown.Toggle variant="" className='sort-toggle d-flex justify-content-around'>
          <IoIosBonfire className='sort-icon' />
          <span className='sort-toggle-title'>hot</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className='font-size-14'>
          <NavDropdown.Item href="">
            <IoIosBonfire className='text-secondary mr-2 options-icon' />
            Hot
          </NavDropdown.Item>
          <NavDropdown.Item href="">
            <IoIosStar className='text-secondary mr-2 options-icon' />
            New
          </NavDropdown.Item>
          <NavDropdown.Item href="">
            <IoIosThunderstorm className='text-secondary mr-2 options-icon' />
            Controversial
          </NavDropdown.Item>
          <NavDropdown.Item href="">
            <IoIosPodium className='text-secondary mr-2 options-icon' />
            Top
          </NavDropdown.Item>
          <NavDropdown.Item href="">
            <IoMdTrendingUp className='text-secondary mr-2 options-icon' />
            Rising
          </NavDropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Sort  