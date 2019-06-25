import styled from 'styled-components'
import { Button } from 'react-bootstrap'

import { RedditCard } from '../customComponents'
import { flex } from '../../styles/flex'
import * as mixins from '../../styles/mixins'

import { IoMdRose } from "react-icons/io"


export const Card = styled(RedditCard)`
    ${flex.horizontal};
    ${flex.centerHorizontal};    
    padding: 8px 12px;
`

export const DivText = styled.div`
    padding-right: .25rem
`

export const H6Title = styled.h6`
    font-weight: 600;
    margin-bottom: 5px;
`
export const ButtonPremium = styled(Button)`
    min-width: 84px;
    background-color: ${mixins.colorRed};
    border-color: ${mixins.colorRed};
    height: 28px;
    font-size: ${mixins.fontsizeSMedium};
    font-weight: 700;
    letter-spacing: .5px;
    line-height: 24px;
    text-transform: uppercase;
    padding: 0;

    :hover {
        background-color: ${mixins.colorLightRed};
        border-color: ${mixins.colorLightRed};
    }

    &.btn-primary:not(:disabled):not(.disabled):active {
        background-color: ${mixins.colorDarkRed};
        border-color: ${mixins.colorDarkRed};
    }
`

// icons
export const IconRose = styled(IoMdRose)`
    font-size: 1.5rem;
    margin-right: .5rem;
`