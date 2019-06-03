import React from 'react'

import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'

import { IoMdPause, IoMdMenu, IoMdReorder } from "react-icons/io"

import './View.css'


const View = () => {
  return (
    <div className='d-flex view-container'>

      <span class='view-title'>VIEW</span>

      <Nav.Link href="" className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Card</Tooltip>}>
          <IoMdPause className='text-primary card-icon' />
        </OverlayTrigger>
      </Nav.Link>

      <Nav.Link href="" className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Classic</Tooltip>}>
          <IoMdMenu className='filter-icons text-primary' />
        </OverlayTrigger>
      </Nav.Link>

      <Nav.Link href="" className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Compact</Tooltip>}>
          <IoMdReorder className='filter-icons text-primary' />
        </OverlayTrigger>
      </Nav.Link>

    </div>
  );
}

export default View  