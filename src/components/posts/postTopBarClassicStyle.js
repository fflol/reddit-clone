import styled from 'styled-components'
import { Button, Tooltip } from 'react-bootstrap'

import * as mixins from '../../styles/mixins' 
import { flex } from '../../styles/flex'


export const DivContainer = styled.div`
    ${flex.horizontal};
    ${flex.spaceBetween};
    margin-top: 0;
    margin-bottom: 0;
    z-index: 5;
    position: relative;
`

export const DivSubContainer = styled.div`
    ${flex.horizontal};
    margin-top: .25rem;
`

export const SpanSubreddit = styled.span`
    font-weight: 700;

    :hover {
        text-decoration: underline;
    }
`

export const Span = styled.span`
    :hover {
        text-decoration: underline;
    }
`

export const ButtonJoin = styled(Button)`
    height: 24px;
    padding: 0 10px 3px 5px;
    margin: 0 0 0 0;
    font-size: ${mixins.fontsizeSMedium};
    font-weight: 700;
    letter-spacing: 0.5px;
    text-transform: uppercase;
`

export const TooltipTime = styled(Tooltip)`
    ${mixins.fontsizeSMedium}
`