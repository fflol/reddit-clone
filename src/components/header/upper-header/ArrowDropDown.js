import React from 'react';

// import react-bootstrap components
import { NavDropdown, Dropdown } from 'react-bootstrap'

// import components
import { chooseSubreddit } from '../../../actions/actions'
import { CustomMenu } from '../../customComponents'

// import 
// import { IoMdTrendingUp, IoIosPodium, IoIosCreate, IoIosRadioButtonOn, IoMdRose } from "react-icons/io"

// import redux components
import { connect } from 'react-redux'

import * as Styled from './arrowDropDownStyle'

// import css
// import './ArrowDropDown.css'


// component
const ArrowDropDown = ({ subreddit, chooseSubreddit }) => {

    const handleSelect = (eventKey) => {
        chooseSubreddit(eventKey)
    }

    const popular = (
        <span>
            <Styled.IconTrendingUp />
            <Styled.FeedSpan>popular</Styled.FeedSpan>
        </span>
    )

    const all = (
        <span>
            <Styled.IconPodium />
            <Styled.FeedSpan>all</Styled.FeedSpan>
        </span>
    )

    const original = (
        <span>
            <Styled.IconCreate />
            <Styled.FeedSpan>original content</Styled.FeedSpan>
        </span>
    )


    return (
        <Styled.DropdownContainer>

            <Styled.DropdownToggle variant=''>
                {/* <Dropdown.Toggle variant='' className='dropdown-toggle-custom align-items-center p-0 d-flex justify-content-between'> */}
                {(() => {
                    switch (subreddit) {
                        case 'popular':
                            return popular
                        case 'all':
                            return all
                        case 'original':
                            return original
                        default:
                            return popular
                    }
                })()}
                {/* </Dropdown.Toggle> */}
            </Styled.DropdownToggle>

            <Dropdown.Menu as={CustomMenu}>

                <Styled.DropdownHeader>REDDIT FEEDS</Styled.DropdownHeader>

                <NavDropdown.Item eventKey='popular' onSelect={handleSelect}>
                    <span>
                        <Styled.IconTrendingUp />
                        <Styled.CapitalizedSpan>popular</Styled.CapitalizedSpan>
                    </span>
                </NavDropdown.Item>

                <NavDropdown.Item eventKey='all' onSelect={handleSelect}>
                    <span>
                        <Styled.IconPodium />
                        <Styled.CapitalizedSpan>all</Styled.CapitalizedSpan>
                    </span>
                </NavDropdown.Item>

                <NavDropdown.Item eventKey='original' onSelect={handleSelect}>
                    <span>
                        <Styled.IconCreate />
                        <Styled.CapitalizedSpan>original content</Styled.CapitalizedSpan>
                    </span>
                </NavDropdown.Item>

                <Styled.DropdownHeader>OTHER</Styled.DropdownHeader>

                <NavDropdown.Item href="" eventKey='coin' >
                    <Styled.IconRadioButtonOn />
                    coin
                </NavDropdown.Item>

                <NavDropdown.Item href="" eventKey='premium' >
                    <Styled.IconRose />
                    premium
                </NavDropdown.Item>

            </Dropdown.Menu>
        </Styled.DropdownContainer>
    )
}



const mapStateToProps = (state) => {
    return {
        subreddit: state.subreddit
    }
}

export default connect(mapStateToProps, { chooseSubreddit })(ArrowDropDown)