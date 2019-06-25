import styled from 'styled-components'
import {Navbar} from 'react-bootstrap'

import {flex} from '../../../styles/flex'
import {breakpoints, smallerThan, widerThan} from '../../../styles/responsive'
import * as mixins from '../../../styles/mixins'


export const NavBar = styled(Navbar)`
    ${flex.horizontal};
    ${flex.centerHorizontalH};
    ${smallerThan(breakpoints.medium)} {
        padding: 0 0px;
    };
    ${widerThan(breakpoints.medium)} {
        padding: 0 20px;
    };
    padding: 0;
    background-color: ${mixins.colorComponentsBackground};
`

export const DivContainer = styled.div`
    ${flex.horizontal};
    ${flex.centerHorizontalV};
    padding: 7px 0 7px 7px;
`