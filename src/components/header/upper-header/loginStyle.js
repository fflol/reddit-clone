import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import { breakpoints, smallerThan, widerThan } from '../../../styles/responsive'
import * as mixins from '../../../styles/mixins'

export const DivContainer = styled.div`
    margin: 4px 0 0 15px;
    ${smallerThan(breakpoints.medium)} {display: none;};
    ${widerThan(breakpoints.medium)} {display: flex;};
`

const buttonStyle = `
    height: 30px;
    font-size: ${mixins.fontsizeSMedium};
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    padding: 3px 5px;
    ${widerThan(breakpoints.ExtraLarge)} {width: 120px;};
`

export const ButtonLogin = styled(Button)`
    margin-right: 1rem;
    ${buttonStyle}
`

export const ButtonSignUp = styled(Button)`
    ${buttonStyle}
`