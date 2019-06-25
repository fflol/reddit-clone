import styled from 'styled-components'

import { breakpoints, smallerThan, widerThan } from '../../styles/responsive'

export const MainContainer = styled.main`
    ${smallerThan(breakpoints.large)} {width: 100%;};
    ${widerThan(breakpoints.large)} {width: 648px;};
`