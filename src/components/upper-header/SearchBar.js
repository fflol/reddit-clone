import React from 'react';
import { Form } from 'react-bootstrap'
import './SearchBar.css'

import {IoMdSearch} from "react-icons/io"

const SearchBar = () => {
  return (
    <div className='search-container flex-grow-1 d-flex'>
      <IoMdSearch className='search-icon align-middle' />
      <Form inline className='search-form'>
        <input type="text" placeholder="Search Reddit" className="search-bar" />
      </Form>
    </div>
  )
}

export default SearchBar