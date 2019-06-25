import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

import { colorComponentsBackground } from '../../../styles/mixins'
import { breakpoints, smallerThan, widerThan } from '../../../styles/responsive'
import { HorizontalContainer } from '../../../styles/sharedComponents'



export const UpperHeaderNavbar = styled(Navbar)`
    background-color: ${colorComponentsBackground};
    border-bottom: 1px solid rgb(237, 239, 241);
    height: 48px;
    ${smallerThan(breakpoints.large)} {padding: 0 5px};
    ${widerThan(breakpoints.large)} {padding: 0 20px;};
`

export const FlexGrowContainer = styled(HorizontalContainer)`
    flex-grow: 1;
`