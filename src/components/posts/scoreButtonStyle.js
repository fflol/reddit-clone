import styled from 'styled-components'

import * as mixins from '../../styles/mixins' 
import { flex } from '../../styles/flex'
import { breakpoints, smallerThan, widerThan } from '../../styles/responsive'

import { IoMdArrowRoundUp, IoMdArrowRoundDown } from "react-icons/io";


export const DivContainer = styled.div`
    ${smallerThan(breakpoints.medium)} {display: none};
    ${widerThan(breakpoints.medium)} {display: flex};
    ${flex.centerHorizontalV};
    flex-direction: column;
    width: 40px;
    background-color: ${mixins.colorLightGrayBackground};
    padding: 8px 5px 0 5px;
    z-index: 5;
    position: relative;
`

export const Button = styled.button`
    background-color: inherit;
    border: none;
`

export const SpanScore = styled.span`
    font-weight: 700;
`


// icons
const iconStyle = `
    font-size: 20px;
    color: ${mixins.colorSecondary};
`

export const IconRoundUp = styled(IoMdArrowRoundUp)`
    ${iconStyle}
`

export const IconRoundDown = styled(IoMdArrowRoundDown)`
    ${iconStyle}
`