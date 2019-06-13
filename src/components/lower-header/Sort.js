import React from 'react'
import { connect } from 'react-redux'

import { NavDropdown, Dropdown } from 'react-bootstrap'

import { chooseSort } from '../../actions/actions'

import { IoIosBonfire, IoIosStar, IoIosThunderstorm, IoIosPodium, IoMdTrendingUp, } from "react-icons/io"

import './Sort.css'


const Sort = ({ sort, chooseSort }) => {

  const handleSelect = (eventKey) => {
    chooseSort(eventKey)
  }

  const icon = () => {
    switch (sort) {
      case 'hot':
        return <IoIosBonfire className='sort-icon' />
      case 'new':
        return <IoIosStar className='sort-icon' />
      case 'controversial':
        return <IoIosThunderstorm className='sort-icon' />
      case 'top':
        return <IoIosPodium className='sort-icon' />
      case 'rising':
        return <IoMdTrendingUp className='sort-icon' />
      default:
        return
    }
  }

  return (
    <div className='d-flex align-items-center'>
      <span className='sort-title'>SORT</span>

      <Dropdown>

        <Dropdown.Toggle variant="" className='sort-toggle d-flex align-items-center justify-content-around'>
          {icon()}
          <span className='sort-toggle-title'>{sort}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu className='font-size-14'>

          <NavDropdown.Item eventKey='hot' onSelect={handleSelect}>
            <IoIosBonfire className='text-secondary mr-2 options-icon' />
            Hot
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='new' onSelect={handleSelect}>
            <IoIosStar className='text-secondary mr-2 options-icon' />
            New
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='controversial' onSelect={handleSelect}>
            <IoIosThunderstorm className='text-secondary mr-2 options-icon' />
            Controversial
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='top' onSelect={handleSelect}>
            <IoIosPodium className='text-secondary mr-2 options-icon' />
            Top
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='rising' onSelect={handleSelect}>
            <IoMdTrendingUp className='text-secondary mr-2 options-icon' />
            Rising
          </NavDropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    sort: state.sort
  }
}

export default connect(mapStateToProps, { chooseSort })(Sort)