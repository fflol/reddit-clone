import React from 'react'

import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'

import { IoMdPause, IoMdMenu, IoMdReorder } from "react-icons/io"
import { FaEquals, FaBars, FaAlignJustify } from "react-icons/fa"
import { MdReorder, MdViewAgenda, MdViewHeadline, MdMenu, MdDehaze } from "react-icons/md";
import { GoThreeBars } from "react-icons/go";


import './View.css'


const View = () => {
  return (
    <div className='d-flex align-items-center view-container'>

      <span class='view-title'>VIEW</span>

      <Nav.Link href="" className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Card</Tooltip>}>
          <MdViewAgenda className='text-primary card-icon' />
        </OverlayTrigger>
      </Nav.Link>

      <Nav.Link href="" className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Classic</Tooltip>}>
          <MdReorder className='filter-icons text-primary' />
        </OverlayTrigger>
      </Nav.Link>

      <Nav.Link href="" className='p-0'>
        <OverlayTrigger placement='top' overlay={<Tooltip>Compact</Tooltip>}>
          <GoThreeBars className='filter-icons text-primary' />
        </OverlayTrigger>
      </Nav.Link>

    </div>
  );
}

export default View  