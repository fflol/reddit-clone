import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

import { breakpoints, smallerThan, widerThan } from '../../../styles/responsive'


export const NavbarBrand = styled(Navbar.Brand)`
    margin-right: 0;
`

export const ImgLogo = styled.img`
    display: inline-block;
    vertical-align: middle;
`

export const ImgText = styled.img`
    margin-left: .5rem;
    vertical-align: middle;
    ${smallerThan(breakpoints.ExtraLarge)} {display: none;};
    ${widerThan(breakpoints.ExtraLarge)} {display: inline-block;}
`