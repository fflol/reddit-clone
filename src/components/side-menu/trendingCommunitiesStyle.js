import styled from 'styled-components'

import { RedditCard } from '../customComponents'

import * as mixins from '../../styles/mixins'
import { flex } from '../../styles/flex'

export const Card = styled(RedditCard)`
    padding: 8px 12px;
`

export const H6Title = styled.h6`
    font-size: ${mixins.fontsizeSMedium};
    line-height: 16px;
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
`

export const DivContainer = styled.div`
    ${flex.vertical};
    margin-top: .5rem;
`