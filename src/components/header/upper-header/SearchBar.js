import React from 'react';

// import actions 
import { asyncSearch } from '../../../actions/snoowrapActions'

// import redux components
import { connect } from 'react-redux'

// import css
// import './SearchBar.css'

// import styled components
import { SearchContainer, SearchIcon, SearchForm, SearchInput } from './searchBarStyle'


// components
const SearchBar = ({ asyncSearch }) => {

  let input = ''

  const handleSubmit = (e) => {
    e.preventDefault()
    asyncSearch(input.value)
  }


  return (
    <SearchContainer>
      {/* <div className='search-container flex-grow-1 d-flex'> */}
      <SearchIcon />
      {/* <IoMdSearch className='search-icon align-middle' /> */}
      <SearchForm onSubmit={handleSubmit}>
        {/* <Form inline className='search-form' onSubmit={handleSubmit}> */}
        <SearchInput type="text" placeholder="Search Reddit" ref={node => input = node} />
        {/* <input type="text" placeholder="Search Reddit" className="search-bar" ref={node => input = node} /> */}
        {/* </Form> */}
      </SearchForm>
      {/* </div> */}
    </SearchContainer>
  )
}


const mapStateToProps = () => { }

export default connect(mapStateToProps, { asyncSearch })(SearchBar)
