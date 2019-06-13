import React from 'react';
import { Form } from 'react-bootstrap'
import { connect } from 'react-redux'

import { IoMdSearch } from "react-icons/io"

import { asyncSearch } from '../../actions/snoowrapActions'

import './SearchBar.css'


const SearchBar = ({ asyncSearch }) => {

  let input = ''

  const handleSubmit = (e) => {
    e.preventDefault()
    asyncSearch(input.value)
  }

  return (
    <div className='search-container flex-grow-1 d-flex'>
      <IoMdSearch className='search-icon align-middle' />
      <Form inline className='search-form' onSubmit={handleSubmit}>
        <input type="text" placeholder="Search Reddit" className="search-bar" ref={node => input = node}  />
      </Form>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps, { asyncSearch })(SearchBar)
