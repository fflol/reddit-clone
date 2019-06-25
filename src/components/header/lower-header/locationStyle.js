import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'

import {flex} from '../../../styles/flex'
import * as mixins from '../../../styles/mixins'


export const DropdownToggle = styled(Dropdown.Toggle)`
    ${flex.horizontal}
    ${flex.centerHorizontalV}
    ${flex.spaceAround}
    color: ${mixins.colorPrimary}
    height: 28px;
    margin: 0px 0 0 12px;
    padding: 0px 0 0 0;
    
    :focus {
        outline:0;
        box-shadow: none;
    }

    :hover {
        color: #007bff
    }

    :after {
        margin-top: 0px;
        border-top: .2em solid;
        border-right: .2em solid transparent;
        border-left: .2em solid transparent;
    }
`

export const ToggleSpan = styled.span`
    margin: 0px 0 0px 0;
    font-size: ${mixins.fontsizeSMedium};
    letter-spacing: 0.5px;
    font-weight: 700;
    text-transform: uppercase;
`

export const DropdownMenu = styled(Dropdown.Menu)`
    font-size: ${mixins.fontsizeMedium}
`