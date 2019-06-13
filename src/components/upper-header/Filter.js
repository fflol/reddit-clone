import React from 'react';
import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'

import { chooseSubreddit } from '../../actions/actions'
import { connect } from 'react-redux'

import { IoMdTrendingUp, IoIosPodium, IoIosCreate } from "react-icons/io"

import './Filter.css'



const Filter = ({ chooseSubreddit }) => {

    const handleSelect = (eventKey) => {
        chooseSubreddit(eventKey)
    }

    return (
        <div className='filter-container'>

            <Nav.Link eventKey='popular' onSelect={handleSelect} className='px-2 pt-0'>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>Popular</Tooltip>}>
                    <IoMdTrendingUp className='pr-1 filter-icons' />
                </OverlayTrigger>
            </Nav.Link>

            <Nav.Link eventKey='all' onSelect={handleSelect} className='px-2 pt-0'>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>All</Tooltip>}>
                    <IoIosPodium className='pr-1 filter-icons' />
                </OverlayTrigger>
            </Nav.Link>

            <Nav.Link eventKey='original' onSelect={handleSelect} className='px-2 pt-0'>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>Original content</Tooltip>}>
                    <IoIosCreate className='pr-1 filter-icons' />
                </OverlayTrigger>
            </Nav.Link>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps, { chooseSubreddit })(Filter)