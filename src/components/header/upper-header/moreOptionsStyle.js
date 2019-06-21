import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

import { componentsBackground } from '../../../styles/mixins'
import { breakpoints, smallerThan, widerThan } from '../../../styles/responsive'
import { HorizontalContainer } from '../../../styles/sharedComponents'
import { flex } from '../../../styles/flex'

import { NavDropdown, Dropdown } from 'react-bootstrap'


export const moreOptionsDropdownToggle = styled(Dropdown.Toggle)`

`


// export const moreOptionsDropdownToggle = styled(Dropdown.Toggle)`
//     ${flex.horizontal};
//     ${flex.centerHorizontalH};
//     align-items: center;
//     height: 28px;
//     padding: 0;
//     font-size: 14px;

//     &:focus {
//         outline:0;
//         box-shadow: none;
//         border-radius: 4px 4px 4px 4px;
//         border-color: rgb(237, 239, 241);
//     }

//     &:hover {
//         border-radius: 4px 4px 4px 4px;
//         border-color: rgb(237, 239, 241);
//     }

//     &:hover {
//         margin-top: 0px;
//         border-top: .4em solid;
//         border-right: .4em solid transparent;
//         border-left: .4em solid transparent;
//     }
// `