import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'

import * as mixins from '../../styles/mixins' 
import { flex } from '../../styles/flex'
import { breakpoints, smallerThan, widerThan } from '../../styles/responsive'

// import icons
import {
    IoIosText,
    IoIosShareAlt,
    IoMdAddCircleOutline,
    IoIosMore,
    IoIosFlag,
    IoIosRemoveCircleOutline,
    IoMdArrowRoundUp,
    IoMdArrowRoundDown
} from "react-icons/io";


export const DivContainer = styled.div`
    ${flex.horizontal};
    color: ${mixins.colorSecondary};
    font-size: ${mixins.fontsizeSMedium};
    font-weight: 700;
    line-height: 16px;
    z-index: 5;
    position: relative;
`

export const DivScore = styled.div`
    ${smallerThan(breakpoints.medium)} {display: flex};
    ${widerThan(breakpoints.medium)} {display: none};
    ${flex.centerHorizontalV};
`

export const SpanScore = styled.span`
    font-weight: 700;
`

export const ButtonScore = styled.div`
    background-color: inherit;
    border: none;
`

const buttonStyle = `
    background-color: inherit;
    border: 0;
    padding: 7px;
    margin: 0 4px 0 0;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;

    :after {
        border: 0;
    }

    :focus {
        outline:0;
        box-shadow: none;
        border-radius: 4px 4px 4px 4px;
        border-color: rgb(237, 239, 241);
    }

    :hover {
        border-radius: 4px 4px 4px 4px;
        border-color: rgb(237, 239, 241);
    }
`

export const ALink = styled.a`
    ${buttonStyle}
`

export const ALinkRes = styled.a`
    ${smallerThan(breakpoints.medium)} {display: none};
    ${widerThan(breakpoints.medium)} {display: block};
    ${buttonStyle}
`

export const DropdownToggle = styled(Dropdown.Toggle)`
    ${buttonStyle}
`

export const DropdownMenu = styled(Dropdown.Menu)`
    min-width: 0;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;    
`

const responsiveStyle = `
    ${smallerThan(breakpoints.medium)} {display: block};
    ${widerThan(breakpoints.medium)} {display: none};
`

const itemStyle = `
    padding: 0 0 0 0;
    margin: 0 10px;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    color: inherit;
    width: inherit;
`

export const DropdownItem = styled(Dropdown.Item)`
    ${itemStyle}
`

export const DropdownItemRes = styled(Dropdown.Item)`
    ${itemStyle}
    ${responsiveStyle}
`

export const DropdownDivider = styled(Dropdown.Divider)`
    ${responsiveStyle}
`


// icons
const iconScoreStyle = `
    font-size: 20px;
    color: ${mixins.colorSecondary};
`

export const IconArrowUp = styled(IoMdArrowRoundUp)`
    ${iconScoreStyle}
`

export const IconArrowDown = styled(IoMdArrowRoundDown)`
    ${iconScoreStyle}
`

export const IconText = styled(IoIosText)`
    ${iconScoreStyle}
`

export const IconShare = styled(IoIosShareAlt)`
    ${iconScoreStyle}
`

export const IconAdd = styled(IoMdAddCircleOutline)`
    ${iconScoreStyle}
`

export const IconMore = styled(IoIosMore)`
    ${iconScoreStyle}
`

export const IconFlag = styled(IoIosFlag)`
    ${iconScoreStyle}
`

export const IconRemove = styled(IoIosRemoveCircleOutline)`
    ${iconScoreStyle}
`

