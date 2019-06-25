import styled from 'styled-components'
import { Dropdown } from 'react-bootstrap'

import {flex} from '../../../styles/flex'
import * as mixins from '../../../styles/mixins'

import { IoIosBonfire, IoIosStar, IoIosThunderstorm, IoIosPodium, IoMdTrendingUp, } from "react-icons/io"


export const TitleSpan = styled.span`
    color: ${mixins.colorSecondary};
    font-size: ${mixins.fontsizeSMedium};
    margin: 0px 0px 0 0;
    font-weight: 700;
    letter-spacing: 0.5px;
    line-height: 12px;
    text-transform: uppercase;
`

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

export const DropdownMenu = styled(Dropdown.Menu)`
    font-size: ${mixins.fontsizeMedium}
`

// icons
const iconStyle = `
    padding: 0 0px 0 0;
    font-size: 1.1rem
`

export const IconBonfire = styled(IoIosBonfire)`
    ${iconStyle}
`

export const IconStar = styled(IoIosStar)`
    ${iconStyle}
`

export const IconThunderstorm = styled(IoIosThunderstorm)`
    ${iconStyle}
`

export const IconPodium = styled(IoIosPodium)`
    ${iconStyle}
`

export const IconTrendingUp = styled(IoMdTrendingUp)`
    ${iconStyle}
`



const iconSecondryStyle = `
    color: ${mixins.colorSecondary};
    margin-right: .5rem;
`

export const IconSecondaryBonfire = styled(IoIosBonfire)`
    ${iconStyle}
    ${iconSecondryStyle}
`

export const IconSecondaryStar = styled(IoIosStar)`
    ${iconStyle}
    ${iconSecondryStyle}
`

export const IconSecondaryThunderstorm = styled(IoIosThunderstorm)`
    ${iconStyle}
    ${iconSecondryStyle}
`

export const IconSecondaryPodium = styled(IoIosPodium)`
    ${iconStyle}
    ${iconSecondryStyle}
`

export const IconSecondaryTrendingUp = styled(IoMdTrendingUp)`
    ${iconStyle}
    ${iconSecondryStyle}
`
