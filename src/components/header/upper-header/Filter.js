import React from 'react';

// import react-bootstrap compoents
import { Nav, Tooltip, OverlayTrigger } from 'react-bootstrap'

// import icons
import { IoMdTrendingUp, IoIosPodium, IoIosCreate } from "react-icons/io"

// import redux components
import { connect } from 'react-redux'

// import actions
import { chooseSubreddit } from '../../../actions/actions'

import * as Styled from './filterStyle'

// import css
// import './Filter.css'


// component
const Filter = ({ chooseSubreddit }) => {

    const handleSelect = (eventKey) => {
        chooseSubreddit(eventKey)
    }

    return (
        <Styled.Container>

            <Styled.NavLink eventKey='popular' onSelect={handleSelect}>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>Popular</Tooltip>}>
                    <Styled.IconTendingUp />
                </OverlayTrigger>
            </Styled.NavLink>

            <Styled.NavLink eventKey='all' onSelect={handleSelect}>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>All</Tooltip>}>
                    <Styled.IconPodium />
                </OverlayTrigger>
            </Styled.NavLink>

            <Styled.NavLink eventKey='original' onSelect={handleSelect}>
                <OverlayTrigger placement='bottom' overlay={<Tooltip>Original content</Tooltip>}>
                    <Styled.IconCreate />
                </OverlayTrigger>
            </Styled.NavLink>

        </Styled.Container>
    )
}



const mapStateToProps = () => { }

export default connect(mapStateToProps, { chooseSubreddit })(Filter)