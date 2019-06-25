import styled from 'styled-components'
import {Button} from 'react-bootstrap'

import { flex } from '../../styles/flex'
import { breakpoints, smallerThan, widerThan } from '../../styles/responsive'

export const Aside = styled.aside`
    ${smallerThan(breakpoints.medium)} {display: none};
    ${widerThan(breakpoints.medium)} ${flex.vertical};
    width: 312px;
    margin: 0px 0 0 24px;
`

export const ButtonToTop = styled(Button)`
    width: 130px;
    height: 28px;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 0;
    margin: 0 auto;
    margin-top: 50vh;
    position: sticky;
    top: calc(-40px + 100vh);
`