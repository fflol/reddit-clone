import React from 'react'

import { Dropdown } from 'react-bootstrap'

import {Container} from '../../../styles/sharedComponents'

import * as Styled from './locationStyle'
// import './Location.css'


const Location = () => {
  return (
    <Container margin='0px 0px 0 16px'>
      <Dropdown>

        <Styled.DropdownToggle variant="">
          <Styled.ToggleSpan>New Zealand</Styled.ToggleSpan>
        </Styled.DropdownToggle>

        <Styled.DropdownMenu>
          <Dropdown.Item href="">
            New Zealand
          </Dropdown.Item>
        </Styled.DropdownMenu>

      </Dropdown>
    </Container>
  );
}

export default Location  