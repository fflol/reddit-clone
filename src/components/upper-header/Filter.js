import React from 'react';
import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'
import './Filter.css'

import { IoMdTrendingUp, IoIosPodium, IoIosCreate } from "react-icons/io"

const Filter = () => {
    return (
        <div className='filter-container'>

            <Nav.Link href="" className='px-2 pt-0'>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>Popular</Tooltip>}>
                    <IoMdTrendingUp className='pr-1 filter-icons' />
                </OverlayTrigger>
            </Nav.Link>

            <Nav.Link href="" className='px-2 pt-0'>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>All</Tooltip>}>
                    <IoIosPodium className='pr-1 filter-icons' />
                </OverlayTrigger>
            </Nav.Link>

            <Nav.Link href="" className='px-2 pt-0'>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>Original content</Tooltip>}>
                    <IoIosCreate className='pr-1 filter-icons' />
                </OverlayTrigger>
            </Nav.Link>

        </div>
    )
}

export default Filter