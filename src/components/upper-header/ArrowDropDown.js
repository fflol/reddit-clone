import React from 'react';

// import react-bootstrap components
import { NavDropdown, Dropdown } from 'react-bootstrap'

// import components
import { chooseSubreddit } from '../../actions/actions'
import { CustomMenu } from '../customComponents'

// import 
import { IoMdTrendingUp, IoIosPodium, IoIosCreate, IoIosRadioButtonOn, IoMdRose } from "react-icons/io"

// import redux components
import { connect } from 'react-redux'

// import css
import './ArrowDropDown.css'


// component
const ArrowDropDown = ({ subreddit, chooseSubreddit }) => {

    const handleSelect = (eventKey) => {
        chooseSubreddit(eventKey)
    }

    const popular = (
        <span>
            <IoMdTrendingUp className='text-primary pr-1 dropdown-icons' />
            <span className='responsive-items capitalize'>popular</span>
        </span>
    )

    const all = (
        <span>
            <IoIosPodium className='text-primary pr-1 dropdown-icons' />
            <span className='responsive-items capitalize'>all</span>
        </span>
    )

    const original = (
        <span>
            <IoIosCreate className='text-primary pr-1 dropdown-icons' />
            <span className='responsive-items capitalize'>original content</span>
        </span>
    )


    return (
        <Dropdown className='dropdown-container'>

            <Dropdown.Toggle variant='' className='dropdown-toggle-custom align-items-center p-0 d-flex justify-content-between'>
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
            </Dropdown.Toggle>

            <Dropdown.Menu className='font-size-14 w-100' as={CustomMenu}>

                <Dropdown.Header className='font-size-10'>REDDIT FEEDS</Dropdown.Header>

                <NavDropdown.Item eventKey='popular' onSelect={handleSelect}>
                    <span>
                        <IoMdTrendingUp className='text-primary pr-1 dropdown-icons' />
                        <span className='capitalize'>popular</span>
                    </span>
                </NavDropdown.Item>

                <NavDropdown.Item eventKey='all' onSelect={handleSelect}>
                    <span>
                        <IoIosPodium className='text-primary pr-1 dropdown-icons' />
                        <span className='capitalize'>all</span>
                    </span>
                </NavDropdown.Item>

                <NavDropdown.Item eventKey='original' onSelect={handleSelect}>
                    <span>
                        <IoIosCreate className='text-primary pr-1 dropdown-icons' />
                        <span className='capitalize'>original content</span>
                    </span>
                </NavDropdown.Item>

                <Dropdown.Header className='font-size-10'>OTHER</Dropdown.Header>

                <NavDropdown.Item href="">
                    <IoIosRadioButtonOn className='text-warning pr-1 dropdown-icons capitalize' />
                    coin
                </NavDropdown.Item>

                <NavDropdown.Item href="">
                    <IoMdRose className='pr-1 premium-icon capitalize' />
                    premium
                </NavDropdown.Item>

            </Dropdown.Menu>

        </Dropdown>
    )
}



const mapStateToProps = (state) => {
    return {
        subreddit: state.subreddit
    }
}

export default connect(mapStateToProps, { chooseSubreddit })(ArrowDropDown)