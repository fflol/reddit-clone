import React from 'react'

// import react-bootstrap component
import { NavDropdown, Dropdown } from 'react-bootstrap'

// import redux components
import { connect } from 'react-redux'

// import actions
import { chooseSort } from '../../../actions/actions'

import * as Styled from './sortStyle'
import { HorizontalContainer } from '../../../styles/sharedComponents'


// component
const Sort = ({ sort, chooseSort }) => {

  const handleSelect = (eventKey) => {
    chooseSort(eventKey)
  }

  const icon = () => {
    switch (sort) {
      case 'hot':
        return <Styled.IconBonfire />
      case 'new':
        return <Styled.IconStar />
      case 'controversial':
        return <Styled.IconThunderstorm />
      case 'top':
        return <Styled.IconPodium />
      case 'rising':
        return <Styled.IconTrendingUp />
      default:
        return
    }
  }

  return (
    <HorizontalContainer centerV>
      <Styled.TitleSpan>SORT</Styled.TitleSpan>

      <Dropdown>

        <Styled.DropdownToggle variant="">
          {icon()}
          <Styled.TitleSpan>{sort}</Styled.TitleSpan>
        </Styled.DropdownToggle>

        <Styled.DropdownMenu>

          <NavDropdown.Item eventKey='hot' onSelect={handleSelect}>
            <Styled.IconSecondaryBonfire />
            Hot
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='new' onSelect={handleSelect}>
            <Styled.IconSecondaryStar />
            New
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='controversial' onSelect={handleSelect}>
            <Styled.IconSecondaryThunderstorm />
            Controversial
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='top' onSelect={handleSelect}>
            <Styled.IconSecondaryPodium />
            Top
          </NavDropdown.Item>

          <NavDropdown.Item eventKey='rising' onSelect={handleSelect}>
            <Styled.IconSecondaryTrendingUp />
            Rising
          </NavDropdown.Item>

        </Styled.DropdownMenu>
      </Dropdown>
    </HorizontalContainer>
  );
}



const mapStateToProps = (state) => {
  return {
    sort: state.sort
  }
}

export default connect(mapStateToProps, { chooseSort })(Sort)