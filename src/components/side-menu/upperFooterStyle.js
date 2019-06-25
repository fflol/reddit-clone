import styled from 'styled-components'

import * as mixins from '../../styles/mixins'
import { flex } from '../../styles/flex'


export const DivContainer = styled.div`
    ${flex.horizontal};
    ${flex.spaceBetween};
    height: 64px;    
`

export const ALink = styled.a`
    color: ${mixins.colorBlack};
    font-size: ${mixins.fontsizeSMedium};
    font-weight: 550;
    line-height: 16px;
    text-decoration: none;
    text-transform: capitalize;

    :hover {
        color: black;
        text-decoration: none;
    }    
`